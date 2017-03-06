class Assembly extends egret.Sprite {
    private map:Models.Map.MapKernel = null
    private person:Models.Person.PersonKernel = null
    private control:Views.ControlPanel = null

    public constructor() {
        super()

        this.init()
    }

    private init():void {
        this.initMap()
        this.initPerson()
        this.initControlPanel()

        this.registerController()
    }

    private initMap():void {
        this.map = new Models.Map.MapKernel()
        this.addChild(this.map)
    }

    private initPerson():void {
        this.person = new Models.Person.PersonKernel()
        this.addChild(this.person)
    }

    private initControlPanel():void {
        this.control = new Views.ControlPanel()
        this.addChild(this.control)
    }

    private registerController():void {
        new Controller.PersonControll(this.person, this.map)
    }
}