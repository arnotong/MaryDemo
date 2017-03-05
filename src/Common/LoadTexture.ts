class LoadTexture {
    private callback:Function = null
    private name:string = null
    private bitmapData:egret.BitmapData = null
    private texture:egret.Texture = null
    private bitmap:egret.Bitmap = null
    private width:number = 0
    private height:number = 0

    public constructor(name:string, func:Function) {
        this.name = name
        this.callback = func
        
        if (!this.name) return
        
        this.startLoad()
    }

    private startLoad():void {
        RES.getResAsync('brick_png', this.loadComplete, this)
    }

    private loadComplete(texture:egret.Texture):void {
        this.texture = texture
        this.bitmap = new egret.Bitmap(this.texture)

        this.callback && this.callback(this)
    }

    public getTexture():egret.Texture {
        return this.texture;
    }

    public getBitmap():egret.Bitmap {
        return this.bitmap;
    }
}