module Common {
    export class TextureBitmap extends egret.Sprite {
        private bitmap:egret.Bitmap = null
        private texture:egret.Texture = null
        private resName:string = null

        public constructor (resName:string) {
            super()

            this.resName = resName
            
            if (!this.resName) return

            this.texture = RES.getRes(this.resName)
            this.bitmap = new egret.Bitmap(this.texture)
        }

        public getBitmap():egret.Bitmap {
            return this.bitmap
        }

        public getTexture():egret.Texture {
            return this.texture
        }

        public getName():string {
            return this.resName
        }
    }
}