module Common {
    export class BaseEvent {
        // 点击事件
        public DIR_LEFT:string = 'dir_left_event'
        public DIR_RIGHT:string = 'dir_right_event'
        public DIR_TOP:string = 'dir_top_event'
        public DIR_BOTTOM:string = 'dir_bottom_event'

        // 点击事件回调
        public DIR_LEFT_CB:string = 'dir_left_event_callback'
        public DIR_RIGHT_CB:string = 'dir_right_event_callback'
        public DIR_TOP_CB:string = 'dir_top_event_callback'
        public DIR_BOTTOM_CB:string = 'dir_bottom_event_callback'
    }
}