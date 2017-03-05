class LoadTexture {
    private callback:Function = null
    private url:string = null
    private loader:egret.ImageLoader = null
    private bitmapData:egret.BitmapData = null
    private texture:egret.Texture = null
    private bitmap:egret.Bitmap = null

    public constructor(url:string, func:Function) {
        this.url = url
        this.callback = func
        
        if (!this.url) return
        
        this.startLoad()
    }

    private startLoad():void {
        this.loader = new egret.ImageLoader()
        this.loader.addEventListener(egret.Event.COMPLETE, this.loadComplete, this)
        this.loader.load(this.url)
    }

    private loadComplete():void {
        this.loadBitmapData()
        this.loadTexture()
        this.loadBitmap()

        this.callback && this.callback(this)
    }

    private loadBitmapData():void {
        this.bitmapData = this.loader.data
    }

    private loadTexture():void {
        this.texture = new egret.Texture()
        this.texture.bitmapData = this.bitmapData
    }

    private loadBitmap():void {
        this.bitmap = new egret.Bitmap(this.texture)
    }

    public getImageLoader():egret.ImageLoader {
        return this.loader;
    }

    public getBitMapData():egret.BitmapData {
        return this.bitmapData;
    }

    public getTexture():egret.Texture {
        return this.texture;
    }

    public getBitmap():egret.Bitmap {
        return this.bitmap;
    }
}