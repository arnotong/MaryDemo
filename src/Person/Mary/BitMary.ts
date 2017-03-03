namespace Person.Mary {
    export class BitMary extends egret.DisplayObjectContainer {
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
                this.textures.push(new Common.TextureBitmap('mary_person_json.' + key).getBitmap())
            })
        }

        private setTexture():void {
            let factory = new egret.MovieClipDataFactory(RES.getRes('mary_person_json'))
            let data = factory.generateMovieClipData('mary_person_json')
            let sp = new egret.MovieClip(data)
            sp.gotoAndPlay(1, -1)

            this.addChild(sp)
        }

        public getHeight():number {
            return this.height
        }
    }
}