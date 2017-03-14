namespace Models.Map.Bricks {
    export class BrickP2 extends Common.P2Body {
        private xNum:number = 0
        private yNum:number = 0

        private resName:string = null
        
        private bitmapW:number = 0
        private bitmapH:number = 0

        private posX:number = 0
        private posY:number = 0

        private box:p2.Box = null

        private isLand:boolean = false

        constructor(resName:string, bitmapW:number, bitmapH:number, xNum:number, yNum:number, x:number, y:number, isLand:boolean) {
            super()

            this.resName = resName
            this.bitmapW = bitmapW
            this.bitmapH = bitmapH
            this.xNum = xNum
            this.yNum = yNum

            this.posX = x
            this.posY = y

            this.isLand = isLand
            console.log('island -----', isLand)
            
            this.initBox()
            this.initBody()
            this.initBrick()
            this.addBodyToWorld()
        }

        private initBody():void {
            this.body = this.getBody({
                mass: 0,
                allowSleep: false,
                collisionResponse: this.isLand,
                position: [this.posX, this.bitmapH * this.yNum / 2]
            })
        }

        private initBox():void {
            this.box = this.getBox({
                width: this.bitmapW * this.xNum,
                height: this.bitmapH * this.yNum
            })
        }

        private initBrick():void {
            let display = null

            if (this.isLand) {
                display = new Brick(this.resName, this.bitmapW, this.bitmapH, this.xNum, this.yNum)
                this.addChild(display)
            }

            this.anchorOffsetX = 0
            this.anchorOffsetY = (<p2.Box>this.box).height / 2

            // console.log(this.anchorOffsetX, this.anchorOffsetY, this.box)

            this.body.addShape(this.box)
            this.body.displays = [display]
            // this.addDisplay([new Brick(this.resName, this.bitmapW, this.bitmapH, this.xNum, this.yNum)], this.box)
        }
    }
}