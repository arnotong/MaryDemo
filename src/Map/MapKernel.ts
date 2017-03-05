class MapKernel extends egret.Sprite {
    private brick:BrickKernel = null
    private mapJson:any = null

    public constructor () {
        super ();

        this.init()
        this.getMapJson()
    }

    private init():void {
        this.setSize()
        this.setPos()
    }

    private setSize():void {
        this.width = egret.MainContext.instance.stage.stageWidth
        this.height = egret.MainContext.instance.stage.stageHeight
    }

    private setPos():void {
        this.x = 0
        this.y = 0
    }

    private getMapJson():void {
        RES.getResAsync('map_json', mapJson => {
            this.mapJson = mapJson

            this.initMap()
        }, this)
    }

    private initMap():void {
        this.initBrick()
    }

    private initBrick():void {
        this.brick = new BrickKernel(this.mapJson.brick)
        this.addChild(this.brick)
    }
}