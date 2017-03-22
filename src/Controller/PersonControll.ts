namespace Controller {
    export class PersonControll {
        private dispatchEvent:egret.EventDispatcher = new egret.EventDispatcher()

        private person:Models.Person.PersonKernel = null
        private map:Models.Map.MapKernel = null
        private assembly:Assembly = null
        
        // 事件列表
        private listenerEventTable = [
            {event: Common.BaseEvent.DIR_LEFT, handle: this.walkLeft},
            {event: Common.BaseEvent.DIR_RIGHT, handle: this.walkRight},
            {event: Common.BaseEvent.DIR_UP, handle: this.walkUp},
            {event: Common.BaseEvent.DIR_DOWN, handle: this.walkDown},
            {event: Common.BaseEvent.DIR_SUPER, handle: this.walkSuper},

            {event: Common.BaseEvent.DIR_LEFT_END, handle: this.walkLeftStop},
            {event: Common.BaseEvent.DIR_RIGHT_END, handle: this.walkRightStop},
            {event: Common.BaseEvent.DIR_UP_END, handle: this.walkUpStop},
            {event: Common.BaseEvent.DIR_DOWN_END, handle: this.walkDownStop},
            {event: Common.BaseEvent.DIR_SUPER_END, handle: this.walkSuperStop}
        ]

        // ticks 对象
        private ticks = {
            left: new Common.BaseTick(),
            right: new Common.BaseTick(),
            up: new Common.BaseTick(),
            down: new Common.BaseTick()
        }

        constructor (person:Models.Person.PersonKernel, map:Models.Map.MapKernel, assembly:Assembly) {
            this.person = person
            this.map = map
            this.assembly = assembly
            
            this.listenerEvent()
        }

        private listenerEvent():void {
            this.listenerEventTable.forEach(e => {
                if (Array.isArray(e.event)) {
                    e.event.forEach(ee => {
                        Common.GlobalDispatch.addEventListener(ee, e.handle, this)
                    })
                } else {
                    Common.GlobalDispatch.addEventListener(e.event, e.handle, this)
                }
            })
        }

        private walkLeft(event?:egret.Event) {
            this.ticks.left.startTick(_ => {
                this.person.left(this.formatEvent(event))
                
                this.moveMapForPerson()
            })
        }

        private walkRight(event?:egret.Event) {
            this.ticks.right.startTick(_ => {
                this.person.right(this.formatEvent(event))

                this.moveMapForPerson()
            })
        }

        private walkUp(event?:egret.Event) {

        }

        private walkDown(event?:egret.Event) {

        }

        private walkSuper(event?:egret.Event) {

        }

        private walkLeftStop(event?:egret.Event) {
            this.person.stopLeft()
            this.ticks.left.stopTick()
        }

        private walkRightStop(event?:egret.Event) {
            this.person.stopRight()
            this.ticks.right.stopTick()
        }

        private walkUpStop(event?:egret.Event) {

        }

        private walkDownStop(event?:egret.Event) {

        }

        private walkSuperStop(event?:egret.Event) {

        }

        private formatEvent(event:egret.Event):egret.Event {
            event['eventTypeName'] = Common.BaseEvent.getEvent(event.type)
            return event
        }

        /**
         * 根据 人物 移动来移动地图
         */
        private moveMapForPerson():void {

            this.moveStaticBody(Common.B2Box.world.GetBodyList(), this.person.getPos())
            
            // let x = pos.x
            // let y = egret.MainContext.instance.stage.x
            // egret.MainContext.instance.stage.x = -pos.x
        }

        private count = 0

        /**
         * 移动 地图 上 所有静态 物品 
         */
        private moveStaticBody(body:Box2D.Dynamics.b2Body, personPos:Common.Position):void {
            if (body) {
                if(body.GetPosition) {
                    let userData = <Models.UserData> (body.GetUserData() || new Models.UserData())
                    console.log(userData.getType())
                    if (userData.isType(Models.UserData.TYPE.MOVE_MAP)) {
                        let pos = userData.getPos()

                        let bodyPos = body.GetPosition()
                        bodyPos.x =  pos.x + personPos.x

                        body.SetPosition(bodyPos)
                    }
                }

                this.moveStaticBody(body.GetNext(), personPos)
            }
        }

    }
}