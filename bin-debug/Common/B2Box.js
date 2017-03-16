var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
    B2Box.world = new Box2D.b2World(new Box2D.Common.Math.b2Vec2(0, 9.81), true);
    Common.B2Box = B2Box;
    __reflect(B2Box.prototype, "Common.B2Box");
})(Common || (Common = {}));
var Box2D;
(function (Box2D) {
    var b2Vec2 = (function (_super) {
        __extends(b2Vec2, _super);
        function b2Vec2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2Vec2;
    }(Box2D.Common.Math.b2Vec2));
    Box2D.b2Vec2 = b2Vec2;
    __reflect(b2Vec2.prototype, "Box2D.b2Vec2");
    var b2AABB = (function (_super) {
        __extends(b2AABB, _super);
        function b2AABB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2AABB;
    }(Box2D.Collision.b2AABB));
    Box2D.b2AABB = b2AABB;
    __reflect(b2AABB.prototype, "Box2D.b2AABB");
    var b2BodyDef = (function (_super) {
        __extends(b2BodyDef, _super);
        function b2BodyDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2BodyDef;
    }(Box2D.Dynamics.b2BodyDef));
    Box2D.b2BodyDef = b2BodyDef;
    __reflect(b2BodyDef.prototype, "Box2D.b2BodyDef");
    var b2Body = (function (_super) {
        __extends(b2Body, _super);
        function b2Body() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2Body;
    }(Box2D.Dynamics.b2Body));
    Box2D.b2Body = b2Body;
    __reflect(b2Body.prototype, "Box2D.b2Body");
    var b2FixtureDef = (function (_super) {
        __extends(b2FixtureDef, _super);
        function b2FixtureDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2FixtureDef;
    }(Box2D.Dynamics.b2FixtureDef));
    Box2D.b2FixtureDef = b2FixtureDef;
    __reflect(b2FixtureDef.prototype, "Box2D.b2FixtureDef");
    var b2Fixture = (function (_super) {
        __extends(b2Fixture, _super);
        function b2Fixture() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2Fixture;
    }(Box2D.Dynamics.b2Fixture));
    Box2D.b2Fixture = b2Fixture;
    __reflect(b2Fixture.prototype, "Box2D.b2Fixture");
    var b2World = (function (_super) {
        __extends(b2World, _super);
        function b2World() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2World;
    }(Box2D.Dynamics.b2World));
    Box2D.b2World = b2World;
    __reflect(b2World.prototype, "Box2D.b2World");
    var b2MassData = (function (_super) {
        __extends(b2MassData, _super);
        function b2MassData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2MassData;
    }(Box2D.Collision.Shapes.b2MassData));
    Box2D.b2MassData = b2MassData;
    __reflect(b2MassData.prototype, "Box2D.b2MassData");
    var b2PolygonShape = (function (_super) {
        __extends(b2PolygonShape, _super);
        function b2PolygonShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2PolygonShape;
    }(Box2D.Collision.Shapes.b2PolygonShape));
    Box2D.b2PolygonShape = b2PolygonShape;
    __reflect(b2PolygonShape.prototype, "Box2D.b2PolygonShape");
    var b2CircleShape = (function (_super) {
        __extends(b2CircleShape, _super);
        function b2CircleShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2CircleShape;
    }(Box2D.Collision.Shapes.b2CircleShape));
    Box2D.b2CircleShape = b2CircleShape;
    __reflect(b2CircleShape.prototype, "Box2D.b2CircleShape");
    var b2DebugDraw = (function (_super) {
        __extends(b2DebugDraw, _super);
        function b2DebugDraw() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2DebugDraw;
    }(Box2D.Dynamics.b2DebugDraw));
    Box2D.b2DebugDraw = b2DebugDraw;
    __reflect(b2DebugDraw.prototype, "Box2D.b2DebugDraw");
    var b2MouseJointDef = (function (_super) {
        __extends(b2MouseJointDef, _super);
        function b2MouseJointDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return b2MouseJointDef;
    }(Box2D.Dynamics.Joints.b2MouseJointDef));
    Box2D.b2MouseJointDef = b2MouseJointDef;
    __reflect(b2MouseJointDef.prototype, "Box2D.b2MouseJointDef");
})(Box2D || (Box2D = {}));
