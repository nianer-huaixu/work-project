import {action, makeObservable, observable} from 'mobx'

class Common {
  constructor(){
    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察
    makeObservable(this, {
      cate: observable,
      url:observable,
      changeCate: action
    })
  }
  cate = 0
  changeCate(val){
    this.cate = val
  }
  url = 'https://www.yangdong.co:8443/yangdong-new/'
}
export default Common