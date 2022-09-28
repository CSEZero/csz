(function flexible(window, document) {
  // 获取html根元素
  const docEl = document.documentElement
  // dpr 物理像素比
  const dpr = window.devicePixelRatio || 1
  // 设置body 字体大小
  function setBodyFontSize() {
    // 页面中有body元素，就设置body字体大小
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    } else {
      // 页面中没有body元素，就等dome元素加载完成后再设置body字体大小
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()
  // 设置html 字体的大小
  function setRemUnit() {
    // 把页面分成10份
    const rem = docEl.clientWidth / 20
    docEl.style.fontSize = rem + 'px'
  }
  setRemUnit()
  // 页面尺寸发生变化是从新设置rem的大小
  window.addEventListener('resize', setRemUnit)
  // pageshow 重新加载页面触发的事件（也可以用load事件，但是火狐用不了，后退返回并不能触发load事件）
  window.addEventListener('pageshow', function(e) {
    // e.persisted 是true ，表示这个页面是从缓存取过来的，也需要从新计算
    if (e.persisted) {
      setRemUnit()
    }
  })
  // 有些移动端的浏览器不支持0.5像素的写法
  if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
  }
}(window, document))
