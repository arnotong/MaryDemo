namespace Common {
    export class GlobalWorld {
        public static world:p2.World = new p2.World({
            gravity:[0, -9.8 * 100]
        })
    }
}