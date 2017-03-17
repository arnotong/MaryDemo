/**
 * 重命名 命名空间
 */
// declare namespace Box2D {
//     export class b2Vec2 extends Box2D.Common.Math.b2Vec2 {}
//     export class b2AABB extends Box2D.Collision.b2AABB {}
//     export class b2BodyDef extends Box2D.Dynamics.b2BodyDef {}
//     export class b2Body extends Box2D.Dynamics.b2Body {}
//     export class b2FixtureDef extends Box2D.Dynamics.b2FixtureDef { constructor() }
//     export class b2Fixture extends Box2D.Dynamics.b2Fixture {}
//     export class b2World extends Box2D.Dynamics.b2World {}
//     export class b2MassData extends Box2D.Collision.Shapes.b2MassData {}
//     export class b2PolygonShape extends Box2D.Collision.Shapes.b2PolygonShape {}
//     export class b2CircleShape extends Box2D.Collision.Shapes.b2CircleShape { constructor(radius?: number) }
//     export class b2DebugDraw extends Box2D.Dynamics.b2DebugDraw { constructor() }
//     export class b2MouseJointDef extends Box2D.Dynamics.Joints.b2MouseJointDef { constructor() }
// }

// declare var BOX2D: {
//     b2Vec2: Box2D.Common.Math.b2Vec2,
//     b2AABB: Box2D.Collision.b2AABB,
//     b2BodyDef: Box2D.Dynamics.b2BodyDef,
//     b2Body: Box2D.Dynamics.b2Body,
//     b2FixtureDef: Box2D.Dynamics.b2FixtureDef,
//     b2Fixture: Box2D.Dynamics.b2Fixture,
//     b2World: Box2D.Dynamics.b2World,
//     b2MassData: Box2D.Collision.Shapes.b2MassData,
//     b2PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
//     b2CircleShape: Box2D.Collision.Shapes.b2CircleShape,
//     b2DebugDraw: Box2D.Dynamics.b2DebugDraw,
//     b2MouseJointDef: Box2D.Dynamics.Joints.b2MouseJointDef,
// }

namespace Common {
    export class B2Box {
        public static world:Box2D.Dynamics.b2World = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 9.81), true)

        public static box2dScale = 30

        public static converNum(num:number) {
            return num / 30
        }

        public static planeHeight():number {
            return egret.MainContext.instance.stage.stageHeight - 80
        }
    }
}