class Assembly extends egret.Sprite {
    private map:Models.Map.MapKernel = null
    private person:Models.Person.PersonKernel = null
    private control:Views.ControlPanel = null

    // private world:p2.World = Common.GlobalWorld.world

    public constructor() {
        super()

        this.init()
    }

    // private initPlane():void {
    //     let plane:p2.Plane = new p2.Plane()
    //     let planeBody:p2.Body = new p2.Body({
    //         position: [0, 0]
    //     })
    //     planeBody.addShape(plane)
    //     planeBody.displays = []
    //     this.world.addBody(planeBody)
    // }

    private initWorld():void {
        egret.Ticker.getInstance().register(dt => {
            if (dt < 10) return
            if (dt > 1000) return

            Common.B2Box.world.Step(dt / 1000, 10, 10)


            // let height:number = egret.MainContext.instance.stage.stageHeight
            // this.world.bodies.forEach(body => {
            //     body.displays.forEach(box => {
            //         if (box) {
            //             box.x = body.position[0]
            //             box.y = height - body.position[1]
            //             box.rotation = 360 - body.angle * 180 / Math.PI
            //         }
            //     })
            // })
        }, this)
    }

    private init():void {
        this.initWorld()
        // this.initPlane() 
        
        // this.initMap()
        // this.initPerson()
        // this.initControlPanel()

        // this.registerController()

        // let body = new p2.Body({mass: 10, position: [0, 500]})
        // let box = new p2.Box({  width: 14, height: 14 })
        // body.addShape(box)
        // let display = new Common.TextureBitmap('bg_jpg').getBitmap()
        
        // display.width = (<p2.Box>box).width
        // display.height = (<p2.Box>box).height

        // display.anchorOffsetX = display.width / 2
        // display.anchorOffsetY = display.height / 2

        // body.displays = [display]
        // this.addChild(display)
        // this.world.addBody(body)

        // window.setInterval(_ => {
        //     body.position = [body.position[0] + 10, body.position[1]]
        // }, 500)

        let body = new Common.B2Box.b2BodyDef()
        body.type = Common.B2Box.b2Body.b2_dynamicBody
        body.position.Set(10 / 30, 100 / 30)

        let fixDef = new Common.B2Box.b2FixtureDef()
        fixDef.density = 1.0
        fixDef.friction = 0.5
        fixDef.restitution = 0.2

        let shape = new Common.B2Box.b2PolygonShape()
        shape.SetAsBox(100 / 30, 100 / 30)
        fixDef.shape = shape

        body.userData = 'arno_1'
        Common.B2Box.world.CreateBody(body).CreateFixture(fixDef)
        body.userData = 'arno_2'
        Common.B2Box.world.CreateBody(body).CreateFixture(fixDef)
        body.userData = 'arno_3'
        Common.B2Box.world.CreateBody(body).CreateFixture(fixDef)

        let display = new Common.TextureBitmap('bg_jpg').getBitmap()
        display.width = 100
        display.height = 100
        this.addChild(display)


        console.log(Common.B2Box.world.GetBodyList())
        
        // display.width = (<p2.Box>box).width
        // display.height = (<p2.Box>box).height

        // display.anchorOffsetX = display.width / 2
        // display.anchorOffsetY = display.height / 2

        // body.displays = [display]
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