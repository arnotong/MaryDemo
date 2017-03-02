class BrickCenter extends egret.DisplayObjectContainer {
    private texture:LoadTexture = null

    public constructor () {
        super ()

        this.initBrick()
    }

    private setBrickPos():void {
        this.height = 60
        this.x = 0
        this.y = egret.MainContext.instance.stage.stageHeight - this.height
    }

    private setTexture(func:Function):void {
        this.texture = new LoadTexture('/resource/assets/brick.png', _ => {
            func.call(this)
        })
    }

    private initBrick():void {
        this.setBrickPos()

        this.setTexture(bitmap => {
            this.getMapJson()
        })
    }

    private getMapJson():void {
        RES.getResAsync('map_json', this.setBricks, this)
    }

    private setBricks(mapsJson):void {
        var bitmap:egret.Bitmap = this.texture.getBitmap()
        var width:number = bitmap.width
        var height:number = bitmap.height

        let preEndX = 0
        mapsJson.forEach(map => {
            if (map.land) {
                var brick:Brick = new Brick(map.w, map.h, preEndX, 0)
                this.addChild(brick)
            }

            preEndX = map.w * width + preEndX
        })
    }
}