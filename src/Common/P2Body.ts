namespace Common {
    export class P2Body extends egret.Sprite {
        protected world:p2.World = Common.GlobalWorld.world
        protected body:p2.Body = null

        constructor() {
            super()
        }

        protected getBody(opts):p2.Body {
            return new p2.Body(opts)
        }

        protected getBox(opts):p2.Box {
            return new p2.Box(opts)
        }

        protected getCircle(opts):p2.Circle {
            return new p2.Circle(opts)
        }

        protected addBodyToWorld():void {
            this.world.addBody(this.body)
        }

        protected addDisplay(displays:Array<egret.DisplayObject>, p2Shape:p2.Shape):void {
            this.body.displays = this.setDisplaysOpts(displays, p2Shape)
            
            this.body.displays.forEach(dis => {
                this.addChild(dis)
            })
        }

        private setDisplaysOpts(displays:Array<egret.DisplayObject>, p2Shape:p2.Shape):Array<any> {
            return displays.map(dis => {
                dis = this.setBoxDisplays(dis, p2Shape)
                dis = this.setCircleDisplays(dis, p2Shape)

                dis.anchorOffsetX = dis.width / 2
                dis.anchorOffsetY = dis.height / 2

                return dis
            })
        }

        private setBoxDisplays(display:egret.DisplayObject, p2Shape:p2.Shape):egret.DisplayObject {
             if (p2Shape instanceof p2.Box) {
                display.width = (<p2.Box>p2Shape).width
                display.height = (<p2.Box>p2Shape).height
            }

            return display
        }

        private setCircleDisplays(display:egret.DisplayObject, p2Shape:p2.Shape):egret.DisplayObject {
            if (p2Shape instanceof p2.Circle) {
               display.width = (<p2.Circle>p2Shape).radius * 2
               display.height = (<p2.Circle>p2Shape).radius * 2
            }

            return display
        }
    }
}