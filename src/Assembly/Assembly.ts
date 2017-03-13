class Assembly extends egret.Sprite {
    private map:Models.Map.MapKernel = null
    private person:Models.Person.PersonKernel = null
    private control:Views.ControlPanel = null

    private world:p2.World = Common.GlobalWorld.world

    public constructor() {
        super()

        this.init()
    }

    private initPlane():void {
        let plane:p2.Plane = new p2.Plane()
        let planeBody:p2.Body = new p2.Body()
        planeBody.addShape(plane)
        planeBody.displays = []
        this.world.addBody(planeBody)
    }

    private initWorld():void {
        this.world.sleepMode = p2.World.BODY_SLEEPING

        egret.Ticker.getInstance().register(dt => {
            if (dt < 10) return
            if (dt > 1000) return

            this.world.step(dt / 1000)

            let height:number = egret.MainContext.instance.stage.stageHeight
            this.world.bodies.forEach(body => {
                body.displays.forEach(box => {
                    if (box) {
                        box.x = body.position[0]
                        box.y = height - body.position[1]
                        console.log(body.position)
                        box.rotation = 360 - body.angle * 180 / Math.PI
                    }
                })
            })
        }, this)
    }

    private init():void {
        this.initWorld()
        this.initPlane()
        
        this.initMap()
        // this.initPerson()
        // this.initControlPanel()

        // this.registerController()

        let body = new p2.Body({mass: 1, position: [10, 100]})
        let box = new p2.Box({width: 20, height: 20})
        body.addShape(box)
        let display = new Common.TextureBitmap('bg_jpg').getBitmap()
        
        display.width = (<p2.Box>box).width
        display.height = (<p2.Box>box).height

        body.displays = [display]
        // this.addChild(display)
        // this.world.addBody(body)
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