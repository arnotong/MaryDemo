class BitMary extends egret.DisplayObjectContainer {
    private textures:Array<egret.Bitmap> = []

    public constructor () {
        super()

        this.initMary()
    }

    private initMary():void {
        this.setSize()
        this.loadTexture()
        this.setTexture()
    }

    private setSize():void {
        this.width = 32
        this.height = 64
    }

    private loadTexture():void {
        let keys = ['mary_1_png','mary_2_png','mary_3_png','mary_4_png','mary_5_png']
        keys.forEach(key => {
            this.textures.push(new TextureBitmap('mary_person_json.' + key).getBitmap())
        })
    }

    private setTexture():void {
        this.addChild(this.textures[0])
    }
}