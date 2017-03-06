namespace Models.Person {
    export class PersonKernel extends egret.Sprite {
        private maryObj:any = null

        public constructor () {
            super()

            this.initMary()
        }

        private initMary():void {
            this.createMary()
            this.setPos()
        }

        private setPos():void {
            this.x = 0
            this.y = egret.MainContext.instance.stage.stageHeight - 60 - this.maryObj.getHeight()
        }

        private createMary():void {
            this.maryObj = new Person.Mary.BitMary()
            this.addChild(this.maryObj)
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
            this.maryObj.walkRight()
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
            this.maryObj.stopClip()
        }
    }
}