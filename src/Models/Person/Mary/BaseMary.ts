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

        // boxBody
        protected boxBody:Box2D.Dynamics.b2BodyDef = new Box2D.Dynamics.b2BodyDef()
        protected boxFixDef:Box2D.Dynamics.b2FixtureDef = new Box2D.Dynamics.b2FixtureDef()
        protected parcelBody:Box2D.Dynamics.b2Body = null
        protected parcelPos:Box2D.Common.Math.b2Vec2 = new Box2D.Common.Math.b2Vec2(0, 0)

        public constructor() {
            super()

            this.initSize()
            this.initAnchor()
            this.initAllMovieClip()
            this.initBodyFix()
            
            this.movieClip = this.rightMovieClip
        }

        /**
         * 获取人物高度
         */
        public getHeight():number {
            return this.height
        }

        /**
         * 获取 positon
         */
        public getPos():Box2D.Common.Math.b2Vec2 {
            // return this.parcelBody.GetPosition()
            return this.parcelPos
        }

        /**
         * 可重写
         * 设置 大小
         */
        protected initSize():void {
            
        }
        /**
         * 设置 中心点
         */
        protected initAnchor():void {
            this.anchorOffsetX = this.width / 2
            this.anchorOffsetY = this.height / 2
        }

        /**
         * 初始化 b2BodyDef 和 b2FixtureDef
         */
        private initBodyFix():void {
            let pos = new Box2D.Common.Math.b2Vec2(Common.B2Box.converNum(egret.MainContext.instance.stage.stageWidth / 2), Common.B2Box.converNum(Common.B2Box.planeHeight()))

            this.boxBody.userData = new Models.UserData([this], Models.UserData.TYPE.PERSON, pos)

            this.boxBody.type = Box2D.Dynamics.b2Body.b2_dynamicBody
            this.boxBody.fixedRotation = true
            this.boxBody.position.Set(pos.x, pos.y)

            this.boxFixDef.density = 50
            this.boxFixDef.friction = 80
            this.boxFixDef.restitution = 0
        }
        /**
         * 添加 shape 包裹形状
         */
        protected addShapeToBox(shape: Box2D.Collision.Shapes.b2Shape):void {
            this.boxFixDef.shape = shape

            this.parcelBody = Common.B2Box.world.CreateBody(this.boxBody)
            this.parcelBody.CreateFixture(this.boxFixDef)
            this.parcelBody.SetSleepingAllowed(false)
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
        private setMovieClipData(movieClip:egret.MovieClip):void {
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

            // let force:Box2D.Common.Math.b2Vec2 = new Box2D.Common.Math.b2Vec2(-50, 0)
            // let center:Box2D.Common.Math.b2Vec2 = this.parcelBody.GetWorldCenter()
            // this.parcelBody.ApplyImpulse(force, center)

            // if (this.parcelBody.GetLinearVelocity().x > 10) {
            //     this.parcelBody.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(10, 0))
            // }

            // this.parcelBody.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(-this.leftSpeed.getSpeed(), 0))

            this.parcelPos.x += Common.B2Box.converNum(this.leftSpeed.getSpeed())

             // this.x -= this.leftSpeed.getSpeed()
            this.gotoAndPlay()
        }

        /**
         * 向右走
         */
        public right(event?:egret.Event) {
            this.setRightMovieClip()

            // this.parcelBody.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(this.rightSpeed.getSpeed(), 0))
            this.parcelPos.x -= Common.B2Box.converNum(this.leftSpeed.getSpeed())

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