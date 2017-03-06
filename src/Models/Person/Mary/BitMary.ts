namespace Models.Person.Mary {
    export class BitMary extends BaseMary implements IMary {
        private textures:Array<egret.Bitmap> = []

        public constructor () {
            super()

            this.initMary()
        }

        private initMary():void {
            this.setSize()

            this.movieClip = this.rightMovieClip
            this.addChild(this.movieClip)
        }

        private setSize():void {
            this.width = 32
            this.height = 64
        }

        protected initAllMovieClip() {
            this.leftMovieClip = null
            this.rightMovieClip = this.getMovieClipData(RES.getRes('mary_person_json'), RES.getRes('mary_person_png'), 'mary_person_right')
        }

        /**
         * 向左走
         */
        public walkLeft():void {

        }

        /**
         * 向右走
         */
        public walkRight() {
            this.setRightMovieClip()
            super.walkRight()
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
        public stopClip() {
            console.log('-------- stop')
            super.stopClip()
        }
    }
}