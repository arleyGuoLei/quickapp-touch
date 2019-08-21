import vibrator from '@system.vibrator'
import throttle  from 'lodash.throttle'
    
export default {
  private: {
    list: [{
      type: 'a',
      height: '',
      styleObj: '',
    },{
      type: 'b',
      height: '',
      styleObj: '',
    },{
      type: 'c',
      height: '',
      styleObj: '',
    },{
      type: 'd',
      height: '',
      styleObj: '',
    },{
      type: 'e',
      height: '',
      styleObj: '',
    },{
      type: 'f',
      height: '',
      styleObj: '',
    },{
      type: 'g',
      height: '',
      styleObj: '',
    },
    ],
    pressShow: false, // 是否按下
    pressItemType: '', // 按下之后显示的type
    pressStyleObj: {} // 显示的组件到顶部的样式
  },
  draggleTouch: throttle(function(event) {
    // event.stopPropagation()
    const { _type, clientY } = event
        
    console.log('TCL: event', event)
    if (_type === 'longpress') {
      vibrator.vibrate({ mode: 'short'})
      this.pressItemType =  event.target._attr.dataType
      this.pressShow = true
      this.pressStyleObj = {
        top: clientY
      }
    }
    
    if (_type === 'touchmove' && this.pressShow) {
      const clientY = event._changedTouches[0].clientY
      this.pressStyleObj = {
        top: clientY
      }
    }
    
    if (_type === 'touchend' || _type === 'touchcancel') {
      this.pressShow = false
      this.pressItemType = ''
    }
  }, 16)
}