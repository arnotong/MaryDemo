class MapCenter extends egret.Sprite {
    private brick:BrickCenter = null

    public constructor () {
        super ()

        this.initBrick()
    }

    private initBrick():void {
        this.brick = new BrickCenter()
        this.addChild(this.brick)
    }
}