namespace Models.Map {
    export interface IMap {
        
        /**
         * 获取 x 对应的 y 值
         */
        getCurrY(x:number)

        /**
         * 获取地图当前位置
         */
        getCurrPos()

        /**
         * 设置 地图 的位置
         */
        setMapPos(x:number, y:number)
    }
}