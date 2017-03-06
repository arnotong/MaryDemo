namespace Models.Map.Bricks {
    export class Brick extends egret.DisplayObjectContainer {
        private posX:number = 0
        private posY:number = 0

        private xNum:number = 0
        private yNum:number = 0

        private bWidth:number = 0
        private bHeight:number = 0

        public constructor (xNum:number, yNum:number, x:number, y:number) {
            super ()

            this.xNum = xNum
            this.yNum = yNum

            this.posX = x
            this.posY = y

            this.setBitmapSize()
            this.setPos()
            this.setSize()
            this.loadTexture()
        }

        private setBitmapSize():void {
            var bitmap:egret.Bitmap = this.getBitmap(0, 0)

            this.bHeight = bitmap.height
            this.bWidth = bitmap.width
        }

        private setPos():void {
            this.x = this.posX
            this.y = this.posY
        }

        private setSize():void {
            this.width = this.bWidth * this.xNum
            this.height = this.bHeight * this.yNum
        }

        private getBitmap(x:number, y:number):egret.Bitmap {
            let bitmap:egret.Bitmap = new Common.TextureBitmap('brick_png').getBitmap()
            bitmap.x = x
            bitmap.y = y

            return bitmap
        }

        private loadTexture():void {
            for (var i=0; i<this.xNum; i++) {
                for (var j=0; j<this.yNum; j++){
                    this.addChild(this.getBitmap(this.bWidth * i, this.bHeight * j))
                }
            }
        }
    }
}