class Assembly extends egret.Sprite {
    private map:MapKernel = null
    private person:PersonKernel = null

    public constructor() {
        super()

        this.init()
    }

    private init():void {
        this.initMap()
        this.initPerson()
    }

    private initMap():void {
        this.map = new MapKernel()
        this.addChild(this.map)
    }

    private initPerson():void {
        this.person = new PersonKernel()
        this.addChild(this.person)
    }
}