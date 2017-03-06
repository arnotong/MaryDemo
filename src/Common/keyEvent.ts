namespace Common {
    export class KeyEvent {
        public static TYPE = {
            'LEFT': 'ArrowLeft',
            'RIGHT': 'ArrowRight',
            'UP': 'ArrowTop',
            'DOWN': 'ArrowBottom',
            'SPACE': 'Space'
        }

        public constructor() {
            
        }

        public static addEventListener(target, eventType, type, func, thisObj):void {
            (target || document).addEventListener(eventType, event => {
                if (type) {
                    if (event.code === this.TYPE[type]) {
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