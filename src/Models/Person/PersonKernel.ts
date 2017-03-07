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
        public left(event?:egret.Event):void {
            this.maryObj.left(event)
        }

        /**
         * 向右走
         */
        public right(event?:egret.Event) {
            this.maryObj.right(event)
        }

        /**
         * 跳
         */
        public jump(event?:egret.Event) {
            this.maryObj.jump(event)
        }

        /**
         * 向下钻
         */
        public drill(event?:egret.Event) {
            this.maryObj.drill(event)
        }

        /**
         * 停止 向左走
         */
        public stopLeft(event?:egret.Event) {
            this.maryObj.stopLeft(event)
        }

        /**
         * 停止 向右走
         */
        public stopRight(event?:egret.Event) {
            this.maryObj.stopRight(event)
        }

        /**
         * 停止 跳跃
         */
        public stopJump(event?:egret.Event) {
            this.maryObj.stopJump(event)
        }

        /**
         * 停止 蹲下
         */
        public stopDrill(event?:egret.Event) {
            this.maryObj.stopDrill(event)
        }

        public getPos() {
            return {
                x: this.x,
                y: this.y
            }
        }
    }
}