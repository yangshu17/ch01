function Router(){
  this.routers={}
  this.currentHash=''
}

var noop = function(){}

//注册
Router.prototype.route=function(hash,cb){
  this.currentHash=hash
  this.routers[this.currentHash]=cb||noop
}

//刷新
Router.prototype.refresh= function(){
  let hash =location.hash||'#position'
  this.currentHash=hash
  this.routers[this.currentHash]()
  this.switchTabbar()
}

//高亮显示
Router.prototype.switchTabbar=function(){
  let hsahs=['#position','#think','#college','#meseege','#profile']
  let index=hsahs.indexOf(this.currentHash)
  $('nav li').eq(index).addClass('active').siblings().removeClass('active')
}

//点击
Router.prototype.init=function(){
  window.addEventListener('load',this.refresh.bind(this))
  window.addEventListener('hashchange',this.refresh.bind(this))
}

export default Router