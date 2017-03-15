namespace Models.Map.Bricks {
    export class BrickKernel extends egret.Sprite {
        private brickData:any = null
        private resName = 'brick_png'
        // private world = Common.GlobalWorld.world

        public constructor (brickData) {
            super ()

            this.brickData = brickData

            this.width = 0
            this.height = 0

            this.initBrick()
        }

        private setBrickPos():void {
            // this.height = this.brickData.height
            this.x = 0
            this.y = 0 // egret.MainContext.instance.stage.stageHeight - this.height
        }

        private initBrick():void {
            this.setBrickPos()

            this.setBricks()
        }

        private setBricks():void {
            var bitmap:egret.Bitmap = new Common.TextureBitmap(this.resName).getBitmap()
            let bitmapW:number = bitmap.width
            let bitmapH:number = bitmap.height

            let preEndX = 0
            this.brickData.data.forEach(map => {
                let width:number = bitmapW * map.w
                let height:number = bitmapH * map.h

                if (map.land) {
                    this.addBrickToWorld(width, height, preEndX, height / 2)
                }

                preEndX = width + preEndX
            })
        }

        private addBrickToWorld(width:number, height:number, x:number, y:number):void {
            // let body = new p2.Body({
            //     mass: 0,
            //     position: [x, y]
            // })
            // let box = new p2.Box({ width: width, height: height })
            // body.addShape(box)

            // let display:egret.Bitmap = new Common.TextureBitmap(this.resName).getBitmap()
            // display.fillMode = egret.BitmapFillMode.REPEAT
            // display.width = width
            // display.height = height
            // display.anchorOffsetX = width / 2
            // display.anchorOffsetY = height / 2

            // body.displays = [display]

            // this.addChild(display)
            // this.world.addBody(body)
        }
     }
}