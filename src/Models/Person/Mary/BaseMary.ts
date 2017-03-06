module Models.Person.Mary {
    export class BaseMary extends egret.Sprite {
        // movieclip
        protected movieClip:egret.MovieClip = null

        // 各个方向的 movieclip
        protected leftMovieClip:egret.MovieClip = null
        protected rightMovieClip:egret.MovieClip = null
        protected upMovieClip:egret.MovieClip = null
        protected downMovieClip:egret.MovieClip = null

        // 各个方向的速度
        protected leftSpeed:number = 10
        protected rightSpeed:number = 10
        protected upSpeed:number = 2
        protected downSpeed:number = 2

        // 定时跑动 flag
        protected timeRunFlag = false

        public constructor() {
            super()

            // this.setRightMovieClip()
            this.initAllMovieClip()
        }

        /**
         * 获取人物高度
         */
        public getHeight():number {
            return this.height
        }

        /**
         * 设置 MovieClip
         */
        protected getMovieClipData(json:any, png:any, name:string):egret.MovieClip {
            let factory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(json, png)
            let sp = new egret.MovieClip(factory.generateMovieClipData())
            sp.name = name
            return sp
        }

        /**
         * 初始化各个方向的 movieClip
         */
        protected initAllMovieClip():void {
            
        }

         /**
         * 设置方向的 MovieClip
         */
        private setMovieClipData(movieClip:egret.MovieClip) {
            if (this.movieClip.name === movieClip.name) return
            
            this.removeChild(this.movieClip)
            this.movieClip = movieClip
            this.addChild(this.movieClip)
        }

        /**
         * 设置 左 方向的 moviceClip
         */
        protected setLeftMovieClip() {
            this.setMovieClipData(this.leftMovieClip)
        }

        /**
         * 设置 右 方向的 moviceClip
         */
        protected setRightMovieClip() {
            this.setMovieClipData(this.rightMovieClip)
        }

        /**
         * 设置 上 方向的 moviceClip
         */
        protected setUpMovieClip() {
            this.setMovieClipData(this.upMovieClip)
        }

        /**
         * 设置 下 方向的 moviceClip
         */
        protected setDownMovieClip() {
            this.setMovieClipData(this.downMovieClip)
        }

        /**
         * 设置 连续动作
         */
        private timeRun(func:Function):void {
            if (this.timeRunFlag) {
                
            }
        }

        /**
         * 向左走
         */
        public walkLeft() {

        }

        /**
         * 向右走
         */
        public walkRight() {
            this.x += this.rightSpeed
            this.movieClip.gotoAndPlay(1, -1)
        }

        /**
         * 向左跑
         */
        public runLeft() {

        }

        /**
         * 向右跑
         */
        public runRight() {

        }

        /**
         * 跳
         */
        public jump() {

        }

        /**
         * 向下钻
         */
        public toDrill() {

        }

        /**
         * 停止
         */
        public stopClip(frame?:any) {
            let frameTmp = frame || 1
            this.movieClip.gotoAndStop(frameTmp)
        }
    }
}