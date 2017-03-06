namespace Models.Map {
    export class MapKernel extends egret.Sprite {
        private brick:Bricks.BrickKernel = null
        private mapJson:any = null

        public constructor () {
            super ();

            this.init()
            this.getMapJson()
        }

        private init():void {
            this.setSize()
            this.setPos()
        }

        private setSize():void {
            this.width = egret.MainContext.instance.stage.stageWidth
            this.height = egret.MainContext.instance.stage.stageHeight
        }

        private setPos():void {
            this.x = 0
            this.y = 0
        }

        private getMapJson():void {
            this.mapJson = RES.getRes('map_json')
            this.initMap()
        }

        private initMap():void {
            this.initBrick()
        }

        private initBrick():void {
            this.brick = new Map.Bricks.BrickKernel(this.mapJson.brick)
            this.addChild(this.brick)
        }
    }
}