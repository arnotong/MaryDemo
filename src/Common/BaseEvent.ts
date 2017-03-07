namespace Common {
    export class BaseEvent {
        // 点击事件
        public static DIR_LEFT:egret.Event = new egret.Event('dir_left_event')
        public static DIR_RIGHT:egret.Event = new egret.Event('dir_right_event')
        public static DIR_UP:egret.Event = new egret.Event('dir_up_event')
        public static DIR_DOWN:egret.Event = new egret.Event('dir_down_event')
        public static DIR_SUPER:egret.Event = new egret.Event('dir_super_event')

        public static DIR_LEFT_END:egret.Event = new egret.Event('dir_left_end_event')
        public static DIR_RIGHT_END:egret.Event = new egret.Event('dir_right_end_event')
        public static DIR_UP_END:egret.Event = new egret.Event('dir_up_end_event')
        public static DIR_DOWN_END:egret.Event = new egret.Event('dir_down_end_event')
        public static DIR_SUPER_END:egret.Event = new egret.Event('dir_super_end_event')

        public static PERSON_MOVE:egret.Event = new egret.Event('person_move')

        // 点击事件回调
        // public static DIR_LEFT_CB:egret.Event = new egret.Event('dir_left_event_callback')
        // public static DIR_RIGHT_CB:egret.Event = new egret.Event('dir_right_event_callback')
        // public static DIR_TOP_CB:egret.Event = new egret.Event('dir_top_event_callback')
        // public static DIR_BOTTOM_CB:egret.Event = new egret.Event('dir_bottom_event_callback')


        public static getEvent(name:string) {
            let key = Object.keys(BaseEvent).filter(key => this[key].type === name)[0]
            return this[key]
        }
    }
}