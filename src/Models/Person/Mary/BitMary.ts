namespace Models.Person.Mary {
    export class BitMary extends BaseMary implements IMary {

        public constructor () {
            super()

            this.initMary()
        }

        private initMary():void {
            this.setSize()
        }

        private setSize():void {
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
    }
}