# 三个目前的问题DEMO

```json
"pages": {
    "SortListAndDiv": {
        "component": "index" // 想通过list监听scroll, 取消滚动, 达到不触发touchcancel
    },
    "SortDiv": {
        "component": "index" // 页面向上滚动touchcancel会触发
    },
    "SortList": {
        "component": "index" // touchcancel会自己触发
    },
}
```
