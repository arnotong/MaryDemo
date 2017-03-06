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
        protected leftSpeed:MarySpeed = new MarySpeed()
        protected rightSpeed:MarySpeed = new MarySpeed()
        protected upSpeed:number = 2
        protected downSpeed:number = 2

        public constructor() {
            super()

            this.initAllMovieClip()
            
            this.movieClip = this.rightMovieClip
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

        protected gotoAndPlay(frame:number = 1, round:number = -1) {
            if (!this.movieClip.isPlaying) {
                this.movieClip.gotoAndPlay(frame, round)
            }
        }

        protected gotoAndStop(frame:number | string = 1) {
            if (this.movieClip.isPlaying) {
                this.movieClip.gotoAndStop(frame)
            }
        }

        /**
         * 向左走
         */
        public left(event?:egret.Event) {
            this.setLeftMovieClip()

            this.x -= this.leftSpeed.getSpeed()
            this.gotoAndPlay()
        }

        /**
         * 向右走
         */
        public right(event?:egret.Event) {
            this.setRightMovieClip()

            this.x += this.rightSpeed.getSpeed()
            this.gotoAndPlay()
        }

        /**
         * 跳
         */
        public jump(event?:egret.Event) {

        }

        /**
         * 向下钻/蹲下
         */
        public drill(event?:egret.Event) {

        }

        /**
         * 子弹
         */
        public super(event?:egret.Event) {

        }

        /**
         * 停止 向左走
         */
        public stopLeft(event?:egret.Event) {
            this.gotoAndStop()
            this.leftSpeed.init()
        }

        /**
         * 停止 向右走
         */
        public stopRight(event?:egret.Event) {
            this.gotoAndStop()
            this.rightSpeed.init()
        }

        /**
         * 停止 跳跃
         */
        public stopJump(event?:egret.Event) {

        }

        /**
         * 停止 蹲下
         */
        public stopDrill(event?:egret.Event) {

        }

        /**
         * 停止 子弹
         */
        public stopSuper(event?:egret.Event) {

        }
    }
}