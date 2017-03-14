namespace Models.Map.Bricks {
    export class BrickKernel extends egret.Sprite {
        private brickData:any = null

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
            let resName = 'brick_png'
            var bitmap:egret.Bitmap = new Common.TextureBitmap(resName).getBitmap()
            let bitmapW:number = bitmap.width
            let bitmapH:number = bitmap.height

            let preEndX = 0
            this.brickData.data.length = 7
            this.brickData.data.forEach(map => {
                // if (map.land) {
                //     var brickP2:BrickP2 = new BrickP2(resName, bitmapW, bitmapH, map.w, map.h, preEndX, 0)
                //     this.addChild(brickP2)
                // }
                var brickP2:BrickP2 = new BrickP2(resName, bitmapW, bitmapH, map.w, map.h, preEndX, 0, map.land)
                this.addChild(brickP2)

                preEndX = map.w * bitmapW + preEndX
            })
        }
    }
}