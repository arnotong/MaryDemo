namespace Controller {
    export class PersonControll {
        private dispatchEvent:egret.EventDispatcher = new egret.EventDispatcher()

        private person:Models.Person.PersonKernel = null
        private map:Models.Map.MapKernel = null

        private listenerEventTable = [
            {event: Common.BaseEvent.DIR_LEFT, handle: this.listenerWalkLeft},
            {event: Common.BaseEvent.DIR_RIGHT, handle: this.listenerWalkRight},
            {event: Common.BaseEvent.DIR_UP, handle: this.listenerWalkUp},
            {event: Common.BaseEvent.DIR_DOWN, handle: this.listenerWalkDown},
            {event: Common.BaseEvent.DIR_SUPER, handle: this.listenerSuper},
            {event: [Common.BaseEvent.DIR_DOWN_END, Common.BaseEvent.DIR_LEFT_END, Common.BaseEvent.DIR_RIGHT_END, Common.BaseEvent.DIR_UP_END, Common.BaseEvent.DIR_SUPER_END], handle: this.stopMovie}
        ]

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

        private listenerWalkRight() {
            this.person.walkRight()
        }

        private listenerWalkLeft() {

        }

        private listenerWalkUp() {

        }

        private listenerWalkDown() {

        }

        private listenerSuper() {

        }

        private stopMovie() {
            this.person.stopClip()
        }

    }
}