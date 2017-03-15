var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var B2Box = (function () {
        function B2Box() {
        }
        B2Box.converNum = function (num) {
            return num / 30;
        };
        return B2Box;
    }());
    B2Box.b2Vec2 = Box2D.Common.Math.b2Vec2;
    B2Box.b2AABB = Box2D.Collision.b2AABB;
    B2Box.b2BodyDef = Box2D.Dynamics.b2BodyDef;
    B2Box.b2Body = Box2D.Dynamics.b2Body;
    B2Box.b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    B2Box.b2Fixture = Box2D.Dynamics.b2Fixture;
    // public static b2World = Box2D.Dynamics.b2World
    B2Box.b2MassData = Box2D.Collision.Shapes.b2MassData;
    B2Box.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    B2Box.b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    B2Box.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
    B2Box.b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
    B2Box.world = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 10), true);
    Common.B2Box = B2Box;
    __reflect(B2Box.prototype, "Common.B2Box");
})(Common || (Common = {}));
