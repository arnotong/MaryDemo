namespace Models {
    export class UserData {
        public static TYPE = {
            MOVE_MAP: 'move_map',
            PERSON: 'person'
        }

        private displays:Array<any> = []
        private type:string = null
        private pos:Box2D.Common.Math.b2Vec2 = null

        constructor(
            displays:Array<any> = [], 
            type:string = UserData.TYPE.MOVE_MAP, 
            pos:Box2D.Common.Math.b2Vec2 = new Box2D.Common.Math.b2Vec2(0 ,0)
        ) {
            this.displays = displays
            this.type = type
            this.pos = pos
        }

        public getDisplays():Array<any> {
            return this.displays
        }

        public getType():string {
            return this.type
        }

        public getPos():Box2D.Common.Math.b2Vec2 {
            return this.pos
        }

        public isType(type:string) {
            return this.type === type
        }
    }
}