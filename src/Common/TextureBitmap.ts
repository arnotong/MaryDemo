class TextureBitmap extends egret.Sprite {
    private bitmap:egret.Bitmap = null

    public constructor (resName) {
        super()

        this.bitmap = new egret.Bitmap(RES.getRes(resName))
    }

    public getBitmap():egret.Bitmap {
        return this.bitmap
    }
}