class Assembly extends egret.Sprite {
    private map:Models.Map.MapKernel = null
    private person:Models.Person.PersonKernel = null
    private control:Views.ControlPanel = null

    private isDebug:boolean = false

    // private world:p2.World = Common.GlobalWorld.world

    public constructor() {
        super()

        this.init()
    }

    private initWorld():void {
        egret.Ticker.getInstance().register(dt => {
            Common.B2Box.world.Step(1/ 60, 10, 10)
            Common.B2Box.world.ClearForces()
            Common.B2Box.world.DrawDebugData()
            
            let bodies = Common.B2Box.world['m_island']['m_bodies'] || []
            bodies.forEach(body => {
                if (body && body.GetPosition && body.GetType() !== Common.B2Box.b2Body.b2_staticBody) {
                    let pos = body.GetPosition()
                    let angle = body.GetAngle()

                    let userData = body.GetUserData() || []
                    userData.forEach(display => {
                        display.x = pos.x * 30
                        display.y = pos.y * 30
                        display.rotation = Math.round(angle * 180 / Math.PI)
                    })
                }
            })
        }, this)
    }

    private init():void {
        this.initWorld()
        // this.initPlane()
        
        this.initMap()
        this.initPerson()
        this.initControlPanel()

        this.registerController()

        // 开启 debug
        this.setDebugDraw()
    }

    private setDebugDraw():void {
        if (!this.isDebug) return

        let draw = new Common.B2Box.b2DebugDraw()
        draw.SetSprite(egret.MainContext.instance.stage.$screen['canvas'].getContext('2d'))
        draw.SetDrawScale(30)
        draw.SetFlags(Common.B2Box.b2DebugDraw.e_shapeBit)
        draw.SetFillAlpha(0.3)
        Common.B2Box.world.SetDebugDraw(draw)
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