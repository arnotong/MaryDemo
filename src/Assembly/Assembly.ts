class Assembly extends egret.Sprite {
    private map:Models.Map.MapKernel = null
    private person:Models.Person.PersonKernel = null
    private control:Views.ControlPanel = null

    // private world:p2.World = Common.GlobalWorld.world

    public constructor() {
        super()

        this.init()
    }

    private initPlane():void {
        let body = new Common.B2Box.b2BodyDef()
        body.position.Set(0, egret.MainContext.instance.stage.stageHeight)
        body.type = Common.B2Box.b2Body.b2_staticBody

        let fixDef = new Common.B2Box.b2FixtureDef()
        // fixDef.density = 1.0
        // fixDef.friction = 0.5
        // fixDef.restitution = 0.2

        let shape = new Common.B2Box.b2PolygonShape()
        shape.SetAsBox(320/30, 10/30)
        fixDef.shape = shape

        let display = new Common.TextureBitmap('brick_png').getBitmap()
        display.width = 320
        display.height = 10
        display.x = 0
        display.y = egret.MainContext.instance.stage.stageHeight
        display.anchorOffsetX = 0
        display.anchorOffsetY = display.height / 2
        body.userData = [display]
        this.addChild(display)

        Common.B2Box.world.CreateBody(body).CreateFixture(fixDef)
    }

    private initWorld():void {
        egret.Ticker.getInstance().register(dt => {
            Common.B2Box.world.Step(1/ 60, 8, 3)
            Common.B2Box.world.ClearForces()
            
            let bodies = Common.B2Box.world['m_island']['m_bodies'] || []
            bodies.forEach(body => {
                if (body && body.GetPosition && body.GetType() !== Common.B2Box.b2Body.b2_staticBody) {
                    let pos = body.GetPosition()

                    let userData = body.GetUserData() || []
                    userData.forEach(display => {
                        display.x = pos.x
                        display.y = pos.y
                    })
                }
            })
        }, this)
    }

    private init():void {
        this.initWorld()
        this.initPlane()
        
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

        let getBody = () => {
            let body = new Common.B2Box.b2BodyDef()
            body.type = Common.B2Box.b2Body.b2_dynamicBody
            body.position.Set(100 / 30, 100 / 30)

            let fixDef = new Common.B2Box.b2FixtureDef()
            fixDef.density = 1.0
            fixDef.friction = 0.6
            fixDef.restitution = 0.8

            let shape = new Common.B2Box.b2PolygonShape()
            shape.SetAsBox(100 / 30, 100 / 30)
            fixDef.shape = shape
            
            return {
                body,
                fixDef
            }
        }

        let {body, fixDef} = getBody()
        let display = new Common.TextureBitmap('bg_jpg').getBitmap()
        display.width = 100
        display.height = 100
        display.anchorOffsetX = 0
        display.anchorOffsetY = display.height
        body.userData = [display]
        this.addChild(display)

        let body1 = Common.B2Box.world.CreateBody(body)
        let mass = new Common.B2Box.b2MassData()
        mass.mass = 40
        body1.SetMassData(mass)
        body1.CreateFixture(fixDef)

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