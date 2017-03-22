class Assembly extends egret.Sprite {
    private map:Models.Map.MapKernel = null
    private person:Models.Person.PersonKernel = null
    private control:Views.ControlPanel = null
    
    private isDebug:boolean = !1

    public constructor() {
        super()

        this.init()
    }

    private initWorld():void {
        egret.Ticker.getInstance().register(dt => {
            Common.B2Box.world.Step(1/ 60, 10, 10)
            Common.B2Box.world.ClearForces()
            Common.B2Box.world.DrawDebugData()
            
            this.updateBoxBody(Common.B2Box.world.GetBodyList())
        }, this)
    }

    private updateBoxBody(body:Box2D.Dynamics.b2Body) {
        if (body) {
            if (body.GetPosition) {
                let pos = body.GetPosition()
                let angle = body.GetAngle()
                let userData = <Models.UserData> (body.GetUserData() || new Models.UserData())
                
                userData.getDisplays().forEach(display => {
                    display.x = pos.x * 30
                    display.y = pos.y * 30
                    display.rotation = Math.round(angle * 180 / Math.PI)
                })
            }

            this.updateBoxBody(body.GetNext())
        }
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

        let draw:Box2D.Dynamics.b2DebugDraw = new Box2D.Dynamics.b2DebugDraw()
        draw.SetSprite(egret.MainContext.instance.stage.$screen['canvas'].getContext('2d'))
        draw.SetDrawScale(30)
        draw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit)
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
        new Controller.PersonControll(this.person, this.map, this)
    }
}