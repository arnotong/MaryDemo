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
        public left():void {
            this.maryObj.left()
        }

        /**
         * 向右走
         */
        public right() {
            this.maryObj.right()
        }

        /**
         * 跳
         */
        public jump() {
            this.maryObj.jump()
        }

        /**
         * 向下钻
         */
        public drill() {
            this.maryObj.drill()
        }

        /**
         * 停止 向左走
         */
        public stopLeft() {
            this.maryObj.stopLeft()
        }

        /**
         * 停止 向右走
         */
        public stopRight() {
            this.maryObj.stopRight()
        }

        /**
         * 停止 跳跃
         */
        public stopJump() {
            this.maryObj.stopJump()
        }

        /**
         * 停止 蹲下
         */
        public stopDrill() {
            this.maryObj.stopDrill()
        }
    }
}