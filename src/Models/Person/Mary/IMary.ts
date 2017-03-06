namespace Models.Person.Mary {
    export interface IMary {

        /**
         * 向左走
         */
        left(event?:egret.Event)

        /**
         * 向右走
         */
        right(event?:egret.Event)

        /**
         * 跳
         */
        jump(event?:egret.Event)

        /**
         * 向下钻/蹲下
         */
        drill(event?:egret.Event)

        /**
         * 子弹按钮
         */
        super(event?:egret.Event)

        /**
         * 停止 向左走
         */
        stopLeft(event?:egret.Event)

        /**
         * 停止 向右走
         */
        stopRight(event?:egret.Event)

        /**
         * 停止 跳跃
         */
        stopJump(event?:egret.Event)

        /**
         * 停止 蹲下
         */
        stopDrill(event?:egret.Event)

        /**
         * 停止 子弹
         */
        stopSuper(event?:egret.Event)

        /**
         * 获取高度
         */
        getHeight(event?:egret.Event)
    }
}