namespace Models.Map {
    export class MapKernel extends egret.Sprite implements IMap {
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
            // this.height = egret.MainContext.instance.stage.stageHeight
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

        /**
         * 获取 x 对应的 y 值
         */
        public getCurrY(x:number) {

        }

        /**
         * 获取地图当前位置
         */
        public getCurrPos() {

        }

        /**
         * 设置 地图 的位置
         */
        public setMapPos(x:number, y:number) {
            this.x = x == null ? this.x : x
            this.y = y == null ? this.y : y
        }
    }
}