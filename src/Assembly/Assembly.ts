class Assembly extends egret.Sprite {
    private map:Models.Map.MapKernel = null
    private person:Models.Person.PersonKernel = null
    private control:Views.ControlPanel = null

    private world:p2.World = new p2.World()

    public constructor() {
        super()

        this.init()
    }

    private init():void {
        // let body:p2.Body = new p2.Body({mass: 1, position: [1, 10]})
        // let shape:p2.Shape = new p2.Circle(1)
        // body.addShape(shape)
        // this.world.addBody(body)

        let factor = 50

        //添加方形刚体
        var boxShape:p2.Shape = new p2.Rectangle(2, 1);
        var boxBody:p2.Body = new p2.Body({ mass: 1, position: [0, 1], angularVelocity: 1});
        boxBody.addShape(boxShape);
        this.world.addBody(boxBody);

        var display:egret.DisplayObject = new Common.TextureBitmap('bg_jpg').getBitmap()
        display.width = (<p2.Rectangle>boxShape).width * factor;
        display.height = (<p2.Rectangle>boxShape).height * factor;

        console.log(display, (<p2.Rectangle>boxShape).width * factor, (<p2.Rectangle>boxShape).height * factor)

        display.anchorOffsetX = display.width / 2
        display.anchorOffsetY = display.height / 2;
        boxBody.displays = [display];
        this.addChild(display)

        // this.initMap()
        // this.initPerson()
        // this.initControlPanel()

        // this.registerController()
    }

    private initMap():void {
        this.map = new Models.Map.MapKernel()
        // this.word.addBody(this.map)
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