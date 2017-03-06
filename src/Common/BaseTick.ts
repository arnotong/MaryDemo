namespace Common {
    export class BaseTick {
        private tickFunc:Function = null
        private isRender:boolean = true
        private isStop:boolean = false

        constructor(isRender:boolean = true) {
            this.isRender = isRender
        }

        public startTick(func, isRender:boolean = true) {
            this.tickFunc = func
            this.isStop = false
            this.isRender = isRender

            egret.startTick(this.tickHandle, this)
        }

        private tickHandle(t:number):boolean {
            if(!this.isStop) {
                this.tickFunc && this.tickFunc()
            }

            return this.isRender
        }

        public stopTick(isRender:boolean = true) {
            this.isStop = true
            this.isRender = isRender

            egret.startTick(this.tickHandle, this)
        }
    }
}