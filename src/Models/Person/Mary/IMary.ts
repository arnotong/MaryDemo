namespace Models.Person.Mary {
    export interface IMary {

        /**
         * 向左走
         */
        walkLeft()

        /**
         * 向右走
         */
        walkRight()

        /**
         * 向左跑
         */
        runLeft()

        /**
         * 向右跑
         */
        runRight()

        /**
         * 跳
         */
        jump()

        /**
         * 向下钻
         */
        toDrill()

        /**
         * 停止
         */
        stopClip()

        /**
         * 获取高度
         */
        getHeight()
    }
}