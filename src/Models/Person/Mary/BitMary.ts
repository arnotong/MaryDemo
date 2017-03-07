namespace Models.Person.Mary {
    export class BitMary extends BaseMary implements IMary {
        private textures:Array<egret.Bitmap> = []

        public constructor () {
            super()

            this.initMary()
        }

        private initMary():void {
            this.setSize()

            this.movieClip && this.addChild(this.movieClip)
        }

        private setSize():void {
            this.width = 32
            this.height = 64
        }

        /**
         * 重写
         * 初始化各个方向的动画
         */
        protected initAllMovieClip() {
            this.leftMovieClip = this.getMovieClipData(RES.getRes('mary_big_left_json'), RES.getRes('mary_big_left_png'), 'mary_big_left')
            this.rightMovieClip = this.getMovieClipData(RES.getRes('mary_big_right_json'), RES.getRes('mary_big_right_png'), 'mary_big_right')
        }
    }
}