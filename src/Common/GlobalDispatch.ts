namespace Common {
    export class GlobalDispatch {
        private static dispatch:egret.EventDispatcher = new egret.EventDispatcher()

        public static dispatchEvent(event:egret.Event):void {
            this.dispatch.dispatchEvent(event)
        }
        
        public static addEventListener(event:egret.Event, listener:Function, thisObj:any, useCapture?:boolean, priority?:number) {
            this.dispatch.addEventListener(event.type, listener, thisObj, useCapture, priority)
        }
    }
}