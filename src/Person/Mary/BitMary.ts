namespace Person.Mary {
    export class BitMary extends Person.Mary.BaseMary {
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
            let factory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes('mary_person_json'), RES.getRes('mary_person_png'))
            let sp:egret.MovieClip = new egret.MovieClip(factory.generateMovieClipData('mary_person'))
            sp.gotoAndPlay(1, -1)

            this.addChild(sp)
        }

        public getHeight():number {
            return this.height
        }
    }
}