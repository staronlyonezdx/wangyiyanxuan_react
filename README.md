## 准备工作
### 项目描述
   1. 该项目是一个单页面应用项目(SPA),使用mock来模拟数据
  
   2. 该项目包括首页,识物,购物车,个人中心,分类,登陆等页面

   3.该项目使用了react全家桶,ES6,webpack等技术栈

   4. 采用模块化,组件化,工程化的模式开发
   
   5. 使用mock来模拟后台数据
   
### 适配问题
   * 网上好多适配方案
   * 该项目使用px2rem,stylus   

### 搭建路由   
   * 在主页面引入App,所有的路由都定义在App里面,但是一个页面只能有一个RouterHash组件
   * 如果App想要访问react-router-dom的属性或者方法就需要加一个withRouter
   * 使用NavLink,跳转路由
   * 路由组件有三个属性 history math 
   * 使用NavLink的时候如果要改变点击时的样式,要使用activeClassName
   * 使用NavLink的时候会把原来样式改掉(未解决,我使用important)
   * 当是peraonal,login,interpage的时候通过location.pathname判断是不是需要显示的路由,如果是返回组件,如果不是返回null
### home页
 * 轮播图
   * new一个Swiper的时候,在componentDidMount的时候,会显示页面,但是滑动不了
   * 要在componentDidUpdate的时候创建
 * GoodsShow组件  
   * 在GoodsShow的组件的时候,组件给他传值,需要创建两个BScroll对象,父组件还要传入一个标识
   * 根据传入的标识,改变类名,重新创建
   * 当父组件给子组件传递数值的时候,要在子组件判断是否有值,不认会报错,map方法找不到
   * 在componentDidMount里面改变不了自身的class值,只能在componentWillReceiveProps里面改变
   * 创建动态改变的呢个类名的时候,改变了类名,但是不能创建一个BScroll,要在componentDidUpdate
 * 倒计时
   * 定义一个方法,在componentDidMount里面调用,setInterval
   * 这个方法要使用箭头函数,不然this找不到
### topic页面
 * 轮播图
### list页面
### personal页面
  * vue项目的时候,点击登陆的时候使用params取到的值,使用导航守卫在页面渲染之前拦截下来,改变状态值
  * 在react里面没有导航守卫这个问题东西,所以只能写两个页面,判断this.props.match.parmas.type来判断进入的是哪种登陆方式
  * 然后控制display的值,通过display来显示还是隐藏
### 缓存当前页面状态,相当于keep-alive
  * React-Keeper(400多star)  
  * react-kelink(90star) 
  
### 其他
  * 用anutd-mobile的时候,封装了onchang事件,里面可以直接访问value的值
  * 如果没有使用,则要使用event.target.value
  
  * 使用了定时器,一定要清除定时器
  * 在组件将要被卸载componentWillUnmount的时候清除定时器
   ​