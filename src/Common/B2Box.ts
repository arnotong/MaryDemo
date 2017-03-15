namespace Common {
    export class B2Box {
        public static b2Vec2 = Box2D.Common.Math.b2Vec2
        public static b2AABB = Box2D.Collision.b2AABB
        public static b2BodyDef = Box2D.Dynamics.b2BodyDef
        public static b2Body = Box2D.Dynamics.b2Body
        public static b2FixtureDef = Box2D.Dynamics.b2FixtureDef
        public static b2Fixture = Box2D.Dynamics.b2Fixture
        // public static b2World = Box2D.Dynamics.b2World
        public static b2MassData = Box2D.Collision.Shapes.b2MassData
        public static b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
        public static b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
        public static b2DebugDraw = Box2D.Dynamics.b2DebugDraw
        public static b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef

        public static world:Box2D.Dynamics.b2World = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 9.81), true)

        public static converNum(num:number) {
            return num / 30
        }
    }
}