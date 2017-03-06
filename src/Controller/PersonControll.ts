namespace Controller {
    export class PersonControll {
        private dispatchEvent:egret.EventDispatcher = new egret.EventDispatcher()

        private person:Models.Person.PersonKernel = null
        private map:Models.Map.MapKernel = null

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

        constructor (person:Models.Person.PersonKernel, map:Models.Map.MapKernel) {
            this.person = person
            this.map = map
            
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

        private walkLeft() {
            this.ticks.left.startTick(_ => {
                this.person.left()
            })
        }

        private walkRight() {
            this.ticks.right.startTick(_ => {
                this.person.right()
            })
        }

        private walkUp() {

        }

        private walkDown() {

        }

        private walkSuper() {

        }

        private walkLeftStop() {
            this.person.stopLeft()
            this.ticks.left.stopTick()
        }

        private walkRightStop() {
            this.person.stopRight()
            this.ticks.right.stopTick()
        }

        private walkUpStop() {

        }

        private walkDownStop() {

        }

        private walkSuperStop() {

        }

        private formatEvent(event:egret.Event) {
            return {
                ...event,
                event: Common.BaseEvent.getEvent(event.type)
            }
        }

    }
}