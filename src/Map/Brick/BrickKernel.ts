class BrickKernel extends egret.DisplayObjectContainer {
    private texture:LoadTexture = null
    private brickData:any = null

    public constructor (brickData) {
        super ()

        this.brickData = brickData

        this.initBrick()
    }

    private setBrickPos():void {
        this.height = this.brickData.height
        this.x = 0
        this.y = egret.MainContext.instance.stage.stageHeight - this.height
    }

    private setTexture(func:Function):void {
        this.texture = new LoadTexture('brick_png', _ => {
            func.call(this)
        })
    }

    private initBrick():void {
        this.setBrickPos()

        this.setTexture(bitmap => {
            this.setBricks()
        })
    }

    private setBricks():void {
        var bitmap:egret.Bitmap = this.texture.getBitmap()
        var width:number = bitmap.width
        var height:number = bitmap.height

        let preEndX = 0
        this.brickData.data.forEach(map => {
            if (map.land) {
                var brick:Brick = new Brick(map.w, map.h, preEndX, 0)
                this.addChild(brick)
            }

            preEndX = map.w * width + preEndX
        })
    }
}