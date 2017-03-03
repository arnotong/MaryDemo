class Assembly extends egret.Sprite {
    private map:Map.MapKernel = null
    private person:Person.PersonKernel = null

    public constructor() {
        super()

        this.init()
    }

    private init():void {
        this.initMap()
        this.initPerson()
    }

    private initMap():void {
        this.map = new Map.MapKernel()
        this.addChild(this.map)
    }

    private initPerson():void {
        this.person = new Person.PersonKernel()
        this.addChild(this.person)
    }
}