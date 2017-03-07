var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Common;
(function (Common) {
    var ResEventListener = (function () {
        function ResEventListener() {
        }
        /**
         * 加载配置文件
         */
        ResEventListener.runConfFuncs = function (event) {
            this.confListenerFuncs.forEach(function (f) {
                f && f(event);
            });
        };
        ResEventListener.addConfComplete = function (func) {
            if (!func)
                return;
            this.confListenerFuncs = this.confListenerFuncs.concat([func]);
            if (!this.isConfListener) {
                this.isConfListener = true;
                RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.runConfFuncs, this);
            }
        };
        ResEventListener.removeConfComplete = function () {
            this.confListenerFuncs = [];
            this.isConfListener = false;
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.runConfFuncs, this);
        };
        /**
         * 加载 group 资源
         */
        ResEventListener.runGroupFuncs = function (event, type) {
            this.groupListenerFuncs.forEach(function (f) {
                f && f[type] && f[type](event);
            });
        };
        ResEventListener.runGroupCompleteFuncs = function (event) {
            this.runGroupFuncs(event, 'complete');
        };
        ResEventListener.runGroupErrorFuncs = function (event) {
            this.runGroupFuncs(event, 'error');
        };
        ResEventListener.runGroupProgressFuncs = function (event) {
            this.runGroupFuncs(event, 'progress');
        };
        ResEventListener.runItemLoadFuncs = function (event) {
            this.runGroupFuncs(event, 'itemLoad');
        };
        ResEventListener.addGroupListener = function (funcs) {
            if (!funcs)
                return;
            this.groupListenerFuncs = this.groupListenerFuncs.concat([funcs]);
            if (!this.isGroupListener) {
                this.isGroupListener = true;
                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.runGroupCompleteFuncs, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.runGroupErrorFuncs, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.runGroupProgressFuncs, this);
                RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.runItemLoadFuncs, this);
            }
        };
        ResEventListener.removeGroupListener = function () {
            this.groupListenerFuncs = [];
            this.isGroupListener = false;
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.runGroupCompleteFuncs, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.runGroupErrorFuncs, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.runGroupProgressFuncs, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.runItemLoadFuncs, this);
        };
        return ResEventListener;
    }());
    ResEventListener.isConfListener = false;
    ResEventListener.confListenerFuncs = [];
    ResEventListener.isGroupListener = false;
    ResEventListener.groupListenerFuncs = [];
    __reflect(ResEventListener.prototype, "ResEventListener");
    /**
     * 单配置文件加载
     *
     * new loadConf(opts)
     *  opts = { url: string, boot:string, group: string, complete:Function, progress:Function }
     */
    var LoadConf = (function () {
        function LoadConf(opts) {
            this.rUrl = null;
            this.rBoot = null;
            this.group = null;
            this.completeCB = null;
            this.progressCB = null;
            this.isRemove = true;
            this.rUrl = opts.url;
            this.rBoot = opts.boot;
            this.group = opts.group;
            this.completeCB = opts.complete;
            this.progressCB = opts.progress;
            this.isRemove = opts.isRemove === false ? false : true;
            this.startLoad();
        }
        LoadConf.prototype.startLoad = function () {
            ResEventListener.addConfComplete(this.onComplete.bind(this));
            RES.loadConfig(this.rUrl, this.rBoot);
        };
        LoadConf.prototype.onComplete = function (event) {
            if (this.group) {
                this.isCanRemoveConfListener();
                ResEventListener.addGroupListener({
                    complete: this.onResourceLoadComplete.bind(this),
                    error: this.onResourceLoadError.bind(this),
                    progress: this.onResourceProgress.bind(this),
                    itemLoad: this.onItemLoadError.bind(this)
                });
                RES.loadGroup(this.group);
            }
            else {
                this.onResourceLoadComplete();
            }
        };
        LoadConf.removeGroupListener = function () {
            ResEventListener.removeGroupListener();
        };
        LoadConf.removeConfComplete = function () {
            ResEventListener.removeConfComplete();
        };
        LoadConf.prototype.isCanRemoveGroupListener = function () {
            this.isRemove && LoadConf.removeGroupListener();
        };
        LoadConf.prototype.isCanRemoveConfListener = function () {
            this.isRemove && LoadConf.removeConfComplete();
        };
        /**
         * 资源组加载完成
         * resource group is loaded
         */
        LoadConf.prototype.onResourceLoadComplete = function (event) {
            if (this.group) {
                if (this.group === event.groupName) {
                    this.completeCB && this.completeCB(event);
                    this.isCanRemoveGroupListener();
                }
            }
            else {
                this.completeCB && this.completeCB(event);
                this.isCanRemoveGroupListener();
            }
        };
        /**
         * 资源组加载出错
         *  The resource group loading failed
         */
        LoadConf.prototype.onItemLoadError = function (event) {
            console.warn("Url:" + event.resItem.url + " has failed to load");
        };
        /**
         * 资源组加载出错
         *  The resource group loading failed
         */
        LoadConf.prototype.onResourceLoadError = function (event) {
            //TODO
            console.warn("Group:" + event.groupName + " has failed to load");
            //忽略加载失败的项目
            //Ignore the loading failed projects
            this.onResourceLoadComplete(event);
        };
        /**
         * 资源组加载进度
         * Loading process of resource group
         */
        LoadConf.prototype.onResourceProgress = function (event) {
            if (this.group) {
                if (event.groupName === this.group) {
                    this.progressCB && this.progressCB(event);
                }
            }
        };
        return LoadConf;
    }());
    Common.LoadConf = LoadConf;
    __reflect(LoadConf.prototype, "Common.LoadConf");
    /**
     * 多配置加载
     *
     * new MultiLoadConf(opts)
     *
     * opts = {
     *  complete: Function,
     *  progress: Function,
     *  res: [
     *    { url: string, boot:string, group: string, complete:Function, progress:Function },
     *    { url: string, boot:string, group: string, complete:Function, progress:Function }
     *  ]
     * }
     */
    var MultiLoadConf = (function () {
        function MultiLoadConf(opts) {
            this.opts = null;
            this.loaders = [];
            this.completeLen = 0;
            this.opts = __assign({}, opts);
            this.initOpts();
            this.startLoad();
        }
        MultiLoadConf.prototype.initOpts = function () {
            var _this = this;
            this.opts.res = (this.opts.res || []).map(function (conf, i) {
                return __assign({}, conf, { confComplete: conf.complete, complete: _this.completeCB.bind(_this), confProgress: conf.progress, progress: _this.progressCB.bind(_this), isRemove: false });
            });
        };
        MultiLoadConf.prototype.startLoad = function () {
            var _this = this;
            this.opts.res.forEach(function (conf) {
                _this.loaders = _this.loaders.concat(new Common.LoadConf(conf));
            });
        };
        MultiLoadConf.prototype.completeCB = function (event) {
            if (event && event.groupName) {
                this.opts.res.forEach(function (conf) {
                    if (conf.group === event.groupName) {
                        conf.confComplete && conf.confComplete(event);
                    }
                });
            }
            this.completeLen += 1;
            if (this.completeLen === this.opts.res.length) {
                this.opts.complete && this.opts.complete(event);
                LoadConf.removeConfComplete();
                LoadConf.removeGroupListener();
            }
        };
        MultiLoadConf.prototype.progressCB = function (event) {
            this.opts.res.forEach(function (conf) {
                if (conf.group === event.groupName) {
                    conf.confProgress && conf.confProgress(event);
                }
            });
            this.opts.progress && this.opts.progress(event);
        };
        return MultiLoadConf;
    }());
    Common.MultiLoadConf = MultiLoadConf;
    __reflect(MultiLoadConf.prototype, "Common.MultiLoadConf");
})(Common || (Common = {}));
