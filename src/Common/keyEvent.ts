namespace Common {
    export class KeyEvent {
        public static TYPE = {
            'LEFT': 'ArrowLeft',
            'RIGHT': 'ArrowRight',
            'UP': 'ArrowTop',
            'DOWN': 'ArrowBottom',
            'SPACE': 'Space'
        }

        private target:HTMLElement | HTMLDocument = null
        private events:Array<string> = []
        private eventsCallback:Array<any> = []

        public constructor(dom:HTMLElement | HTMLDocument = document, event:Array<string> = []) {
            this.target = dom
            this.events = event
            
            this.bingEvent()
        }

        private bingEvent():void {
            this.events.forEach(event => {
                this.target.addEventListener(event, e => {
                    this.runCallback(event, e)
                }, false)
            })
        }

        private runCallback(type, e) {
            this.eventsCallback.forEach(item => {
                if (item.type === type && item.codeType && e.code === item.codeType) {
                    item.func && item.func(e)
                }
            })
        }

        public registerListener(type:string, codeType:string, func:Function):void {
            this.eventsCallback.push({
                codeType: codeType,
                type: type,
                func: func
            })
        }

        public initListener():void {
            this.eventsCallback = []
        }

        public static addEventListener(target, eventType, type, func, thisObj):void {
            (target || document).addEventListener(eventType, event => {
                if (type) {
                    if (event.code === type) {
                        func && func.call(thisObj, event)
                    }
                } else {
                    func && func.call(thisObj, event)
                }
            }, false)
        }

        public static removeEventListener(target, eventType, func):void {
            (target || document).removeEventListener(eventType, func, false)
        }
    }
}