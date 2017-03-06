module Common {
    class ResEventListener {
        private static isConfListener:boolean = false
        private static confListenerFuncs:Array<Function> = []

        private static isGroupListener:boolean = false
        private static groupListenerFuncs:Array<any> = []

        /**
         * 加载配置文件
         */
        private static runConfFuncs(event:RES.ResourceEvent):void {
            this.confListenerFuncs.forEach(f => {
                f && f(event)
            })
        }

        public static addConfComplete(func):void {
            if (!func) return

            this.confListenerFuncs = this.confListenerFuncs.concat([func])

            if (!this.isConfListener) {
                this.isConfListener = true

                RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.runConfFuncs, this)
            }
        }

        public static removeConfComplete():void {
            this.confListenerFuncs = []
            this.isConfListener = false

            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.runConfFuncs, this)
        }

        /**
         * 加载 group 资源
         */
        private static runGroupFuncs(event:RES.ResourceEvent, type:string):void {
            this.groupListenerFuncs.forEach(f => {
                f && f[type] && f[type](event)
            })
        }

        private static runGroupCompleteFuncs(event:RES.ResourceEvent):void {
            this.runGroupFuncs(event, 'complete')
        }
        private static runGroupErrorFuncs(event:RES.ResourceEvent):void {
            this.runGroupFuncs(event, 'error')
        }
        private static runGroupProgressFuncs(event:RES.ResourceEvent):void {
            this.runGroupFuncs(event, 'progress')
        }
        private static runItemLoadFuncs(event:RES.ResourceEvent):void {
            this.runGroupFuncs(event, 'itemLoad')
        }
        
        public static addGroupListener(funcs):void {
            if (!funcs) return

            this.groupListenerFuncs = this.groupListenerFuncs.concat([funcs])

            if (!this.isGroupListener) {
                this.isGroupListener = true

                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.runGroupCompleteFuncs, this)
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.runGroupErrorFuncs, this)
                RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.runGroupProgressFuncs, this)
                RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.runItemLoadFuncs, this)
            }
        }

        public static removeGroupListener():void {
            this.groupListenerFuncs = []
            this.isGroupListener = false

            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.runGroupCompleteFuncs, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.runGroupErrorFuncs, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.runGroupProgressFuncs, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.runItemLoadFuncs, this);
        }

    }

    /**
     * 单配置文件加载
     * 
     * new loadConf(opts)
     *  opts = { url: string, boot:string, group: string, complete:Function, progress:Function }
     */
    export class LoadConf {
        private rUrl:string = null
        private rBoot:any = null
        private group:string = null
        private completeCB:Function = null
        private progressCB:Function = null
        private isRemove:boolean = true

        public constructor(opts) {
            this.rUrl = opts.url
            this.rBoot = opts.boot
            this.group = opts.group
            this.completeCB = opts.complete
            this.progressCB = opts.progress
            this.isRemove = opts.isRemove === false ? false : true

            this.startLoad()
        }

        private startLoad():void {
            ResEventListener.addConfComplete(this.onComplete.bind(this))
            RES.loadConfig(this.rUrl, this.rBoot)
        }

        private onComplete(event:RES.ResourceEvent):void {
            if (this.group) {
                this.isCanRemoveConfListener()

                ResEventListener.addGroupListener({
                    complete: this.onResourceLoadComplete.bind(this),
                    error: this.onResourceLoadError.bind(this),
                    progress: this.onResourceProgress.bind(this),
                    itemLoad: this.onItemLoadError.bind(this)
                })

                RES.loadGroup(this.group)
            } else {
                this.onResourceLoadComplete()
            }
        }

        public static removeGroupListener():void {
            ResEventListener.removeGroupListener()
        }

        public static removeConfComplete():void {
            ResEventListener.removeConfComplete()
        }

        private isCanRemoveGroupListener():void {
            this.isRemove && LoadConf.removeGroupListener()
        }

        private isCanRemoveConfListener():void {
            this.isRemove && LoadConf.removeConfComplete()
        }

        /**
         * 资源组加载完成
         * resource group is loaded
         */
        private onResourceLoadComplete(event?:RES.ResourceEvent):void {
            if (this.group) {
                if (this.group === event.groupName) {
                    this.completeCB && this.completeCB(event)

                    this.isCanRemoveGroupListener()
                }
            } else {
                this.completeCB && this.completeCB(event)

                this.isCanRemoveGroupListener()
            }
        }

        /**
         * 资源组加载出错
         *  The resource group loading failed
         */
        private onItemLoadError(event:RES.ResourceEvent):void {
            console.warn("Url:" + event.resItem.url + " has failed to load");
        }

        /**
         * 资源组加载出错
         *  The resource group loading failed
         */
        private onResourceLoadError(event:RES.ResourceEvent):void {
            //TODO
            console.warn("Group:" + event.groupName + " has failed to load")

            //忽略加载失败的项目
            //Ignore the loading failed projects
            this.onResourceLoadComplete(event)
        }

        /**
         * 资源组加载进度
         * Loading process of resource group
         */
        private onResourceProgress(event:RES.ResourceEvent):void {
            if (this.group) {
                if (event.groupName === this.group) {
                    this.progressCB && this.progressCB(event)
                }
            }
        }
    }

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
    export class MultiLoadConf {
        private opts:any = null
        private loaders:Array<Common.LoadConf> = []
        private completeLen = 0

        public constructor(opts) {
            this.opts = {...opts}

            this.initOpts()
            this.startLoad()
        }

        private initOpts():void {
            this.opts.res = (this.opts.res || []).map((conf, i) => {
                return {
                    ...conf,
                    confComplete: conf.complete,
                    complete: this.completeCB.bind(this),
                    confProgress: conf.progress,
                    progress: this.progressCB.bind(this),
                    isRemove: false
                }
            })
        }

        private startLoad():void {
            this.opts.res.forEach(conf => {
                this.loaders = this.loaders.concat(new Common.LoadConf(conf))
            })
        }

        private completeCB(event:RES.ResourceEvent):void {
            if (event && event.groupName) {
                this.opts.res.forEach(conf => {
                    if (conf.group === event.groupName) {
                        conf.confComplete && conf.confComplete(event)
                    }
                })
            }

            this.completeLen += 1
            
            if (this.completeLen === this.opts.res.length) {
                this.opts.complete && this.opts.complete(event)

                LoadConf.removeConfComplete()
                LoadConf.removeGroupListener()
            }
        }

        private progressCB(event:RES.ResourceEvent):void {
            this.opts.res.forEach(conf => {
                if (conf.group === event.groupName) {
                    conf.confProgress && conf.confProgress(event)
                }
            })

            this.opts.progress && this.opts.progress(event)
        }
    }
}