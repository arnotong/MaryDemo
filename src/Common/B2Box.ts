namespace Common {
    export class B2Box {
        public static world:Box2D.b2World = new Box2D.b2World(new Box2D.Common.Math.b2Vec2(0, 9.81), true)

        public static converNum(num:number) {
            return num / 30
        }
    }
}

namespace Box2D {
    export class b2Vec2 extends Box2D.Common.Math.b2Vec2 {}
    export class b2AABB extends Box2D.Collision.b2AABB {}
    export class b2BodyDef extends Box2D.Dynamics.b2BodyDef {}
    export class b2Body extends Box2D.Dynamics.b2Body {}
    export class b2FixtureDef extends Box2D.Dynamics.b2FixtureDef {}
    export class b2Fixture extends Box2D.Dynamics.b2Fixture {}
    export class b2World extends Box2D.Dynamics.b2World {}
    export class b2MassData extends Box2D.Collision.Shapes.b2MassData {}
    export class b2PolygonShape extends Box2D.Collision.Shapes.b2PolygonShape {}
    export class b2CircleShape extends Box2D.Collision.Shapes.b2CircleShape {}
    export class b2DebugDraw extends Box2D.Dynamics.b2DebugDraw {}
    export class b2MouseJointDef extends Box2D.Dynamics.Joints.b2MouseJointDef {}
}