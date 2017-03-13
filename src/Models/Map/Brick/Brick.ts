namespace Models.Map.Bricks {
    export class Brick extends egret.Sprite {
        private xNum:number = 0
        private yNum:number = 0
        
        private resName:string = null

        private bitmapW:number = 0
        private bitmapH:number = 0

        public constructor (resName:string, bitmapW:number, bitmapH:number, xNum:number, yNum:number) {
            super ()

            this.resName = resName
            this.bitmapW = bitmapW
            this.bitmapH = bitmapH
            this.xNum = xNum
            this.yNum = yNum

            this.setSize()

            this.x = 0
            this.y = 0

            this.loadTexture()
        }

        private setSize():void {
            this.width = this.bitmapW * this.xNum
            this.height = this.bitmapH * this.yNum
        }

        private getBitmap(x:number, y:number):egret.Bitmap {
            let bitmap:egret.Bitmap = new Common.TextureBitmap(this.resName).getBitmap()
            bitmap.x = x
            bitmap.y = y

            return bitmap
        }

        private loadTexture():void {
            for (var i=0; i<this.xNum; i++) {
                for (var j=0; j<this.yNum; j++){
                    this.addChild(this.getBitmap(this.bitmapW * i, this.bitmapH * j))
                }
            }
        }
    }
}