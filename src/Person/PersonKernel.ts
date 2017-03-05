namespace Person {
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
    }
}