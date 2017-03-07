namespace Views {
    export class ControlPanel extends eui.Component {
        private startEventList = [
            {btn: 'leftBtn', event: Common.BaseEvent.DIR_LEFT, key: Common.KeyEvent.TYPE.LEFT},
            {btn: 'rightBtn', event: Common.BaseEvent.DIR_RIGHT, key: Common.KeyEvent.TYPE.RIGHT},
            {btn: 'upBtn', event: Common.BaseEvent.DIR_UP, key: Common.KeyEvent.TYPE.UP},
            {btn: 'downBtn', event: Common.BaseEvent.DIR_DOWN, key: Common.KeyEvent.TYPE.DOWN},
            {btn: 'superBtn', event: Common.BaseEvent.DIR_SUPER, key: Common.KeyEvent.TYPE.SPACE}
        ]

        private endEventList = [
            {btn: 'leftBtn', event: Common.BaseEvent.DIR_LEFT_END, key: Common.KeyEvent.TYPE.LEFT},
            {btn: 'rightBtn', event: Common.BaseEvent.DIR_RIGHT_END, key: Common.KeyEvent.TYPE.RIGHT},
            {btn: 'upBtn', event: Common.BaseEvent.DIR_UP_END, key: Common.KeyEvent.TYPE.UP},
            {btn: 'downBtn', event: Common.BaseEvent.DIR_DOWN_END, key: Common.KeyEvent.TYPE.DOWN},
            {btn: 'superBtn', event: Common.BaseEvent.DIR_SUPER_END, key: Common.KeyEvent.TYPE.SPACE}
        ]

        // 添加监听事件
        private keyEvent = new Common.KeyEvent(document, ['keyup', 'keydown'])

        constructor() {
            super()

            this.init()
        }

        private init():void {
            this.skinName = 'resource/custom_skins/controlPanel.exml'

            this.width = egret.MainContext.instance.stage.stageWidth
            this.height = egret.MainContext.instance.stage.stageHeight

            this.addEventListener(eui.UIEvent.COMPLETE, this.bindEventListener, this)
        }

        protected createChildren():void {
            super.createChildren()
        }

        private bindEventListener():void {
            this.startEventList.forEach(e => {
                this[e.btn].addEventListener(egret.TouchEvent.TOUCH_BEGIN, event => {
                    Common.GlobalDispatch.dispatchEvent(e.event)
                }, this)

                this.keyEvent.registerListener('keydown', e.key, event => {
                    Common.GlobalDispatch.dispatchEvent(e.event)
                })
            })

            this.endEventList.forEach(e => {
                this[e.btn].addEventListener(egret.TouchEvent.TOUCH_END, event => {
                    Common.GlobalDispatch.dispatchEvent(e.event)
                }, this)

                this.keyEvent.registerListener('keyup', e.key, event => {
                    Common.GlobalDispatch.dispatchEvent(e.event)
                })
            })
        }
    }
}