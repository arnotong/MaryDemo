namespace Models.Person.Mary {
    export class BitMary extends BaseMary implements IMary {
        private shape:Box2D.Collision.Shapes.b2PolygonShape = null

        public constructor () {
            super()

            this.initMary()
            this.initShape()
        }

        private initMary():void {
            this.addChild(this.movieClip)            
        }

        protected initSize():void {
            this.width = 32
            this.height = 64
        }

        /**
         * 重写
         * 初始化 全部的 movieClip
         */
        protected initAllMovieClip():void {
            this.leftMovieClip = this.getMovieClipData(RES.getRes('mary_big_left_json'), RES.getRes('mary_big_left_png'), 'mary_big_left')
            this.rightMovieClip = this.getMovieClipData(RES.getRes('mary_big_right_json'), RES.getRes('mary_big_right_png'), 'mary_big_right')
        }

        /**
         * 初始化 包裹盒
         */
        private initShape():void {
            this.shape = new Box2D.Collision.Shapes.b2PolygonShape()
            this.shape.SetAsBox(Common.B2Box.converNum(this.width / 2), Common.B2Box.converNum(this.height / 2))

            this.addShapeToBox(this.shape)
        }
    }
}