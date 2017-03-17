namespace Models.Map.Bricks {
    export class BrickKernel extends egret.Sprite {
        private brickData:any = null
        private resName = 'brick_png'
        // private world = Common.GlobalWorld.world

        public constructor (brickData) {
            super ()

            this.brickData = brickData

            this.width = 0
            this.height = 0

            this.initBrick()
        }

        private setBrickPos():void {
            // this.height = this.brickData.height
            this.x = 0
            this.y = 0 // egret.MainContext.instance.stage.stageHeight - this.height
        }

        private initBrick():void {
            this.setBrickPos()

            this.setBricks()
        }

        private setBricks():void {
            var bitmap:egret.Bitmap = new Common.TextureBitmap(this.resName).getBitmap()
            let bitmapW:number = bitmap.width
            let bitmapH:number = bitmap.height

            let stageHeight = egret.MainContext.instance.stage.stageHeight
            console.log(stageHeight)

            let preEndX = 0
            this.brickData.data.forEach(map => {
                let width:number = bitmapW * map.w
                let height:number = bitmapH * map.h

                if (map.land) {
                    this.addBrickToWorld(width, height, preEndX + width / 2, stageHeight - height / 2)
                }

                preEndX = width + preEndX
            })
        }

        private addBrickToWorld(width:number, height:number, x:number, y:number):void {
            let body:Box2D.Dynamics.b2BodyDef = new Box2D.Dynamics.b2BodyDef()
            body.type = Box2D.Dynamics.b2Body.b2_staticBody
            body.position.Set(Common.B2Box.converNum(x), Common.B2Box.converNum(y))

            let shape:Box2D.Collision.Shapes.b2PolygonShape = new Box2D.Collision.Shapes.b2PolygonShape()
            shape.SetAsBox(Common.B2Box.converNum(width) / 2, Common.B2Box.converNum(height) / 2)

            let fixDef:Box2D.Dynamics.b2FixtureDef = new Box2D.Dynamics.b2FixtureDef()
            fixDef.shape = shape

            let display:egret.Bitmap = new Common.TextureBitmap(this.resName).getBitmap()
            display.fillMode = egret.BitmapFillMode.REPEAT
            display.width = width
            display.height = height
            display.anchorOffsetX = width / 2
            display.anchorOffsetY = height / 2
            display.x = x
            display.y = y

            body.userData = [display]

            this.addChild(display)
            Common.B2Box.world.CreateBody(body).CreateFixture(fixDef)
        }
     }
}