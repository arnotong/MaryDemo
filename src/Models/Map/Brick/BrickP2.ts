namespace Models.Map.Bricks {
    export class BrickP2 extends Common.P2Body {
        private xNum:number = 0
        private yNum:number = 0
        private resName:string = null
        private bitmapW:number = 0
        private bitmapH:number = 0
        private box:p2.Box = null

        constructor(resName:string, bitmapW:number, bitmapH:number, xNum:number, yNum:number, x:number, y:number) {
            super()

            this.resName = resName
            this.bitmapW = bitmapW
            this.bitmapH = bitmapH
            this.xNum = xNum
            this.yNum = yNum

            this.setPos(x, y)
            this.initBox()
            this.initBody()
            this.initBrick()
            this.addBodyToWorld()
        }

        private setPos(x:number, y:number):void {
            this.x = x
            this.y = y
        }

        private initBody():void {
            this.body = this.getBody({
                mass: 0,
                position: [this.x, this.y]
            })
        }

        private initBox():void {
            this.box = this.getBox({
                width: this.bitmapW * this.xNum,
                height: this.bitmapH * this.yNum
            })

            console.log(this.bitmapW * this.xNum,this.bitmapH * this.yNum)
        }

        private initBrick():void {
            this.addChild(new Brick(this.resName, this.bitmapW, this.bitmapH, this.xNum, this.yNum))
            
            this.body.addShape(this.box)
            this.body.displays = [this]
            // this.addDisplay([new Brick(this.resName, this.bitmapW, this.bitmapH, this.xNum, this.yNum)], this.box)
        }
    }
}