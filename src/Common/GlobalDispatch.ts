namespace Common {
    export class GlobalDispatch {
        private static dispatch:egret.EventDispatcher = new egret.EventDispatcher()

        public static dispatchEvent(event:egret.Event, data?:any):void {
            this.dispatch.dispatchEventWith(event.type, true, data)
        }
        
        public static addEventListener(event:egret.Event, listener:Function, thisObj:any, useCapture?:boolean, priority?:number) {
            this.dispatch.addEventListener(event.type, listener, thisObj, useCapture, priority)
        }
    }
}