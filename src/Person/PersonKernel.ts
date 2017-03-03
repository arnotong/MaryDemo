class PersonKernel extends egret.Sprite {
    private maryObj:any = null

    public constructor () {
        super()

        this.initMary()
    }

    private initMary():void {
        this.setPos()
        this.createMary()
    }

    private setPos():void {
        this.x = 0
        this.y = egret.MainContext.instance.stage.stageHeight - 60
    }

    private createMary():void {
        this.maryObj = new BitMary()
        this.addChild(this.maryObj)
    }
}