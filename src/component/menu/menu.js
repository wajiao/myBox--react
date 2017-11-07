let { Component} = React;
require('./menu.less')
class Menu extends Component {
  constructor(props) {
    super(props)
  }
  exchangeRoute(e){
    let dataId = e.target.attributes[0].value;
    //后面想想怎么配置这些数据
    let routes = ["home","list","share"];
    //注意组件的性质，路由化的组件的props
    location.hash = "/"+routes[dataId];
  }
  createMenus(){
    //配置文件
    let menus = ["精选","歌单","分享"]
    return menus.map((item,index)=>{
      return <li key = {index} data-id = {index} onClick = {this.exchangeRoute.bind(this)} >{item}</li>
    })
  }
  render(){

    return <div className = "menu">
      <p className="title">音乐棺</p>
      <ul>
        {this.createMenus()}
      </ul>
      <p className="title">我的歌单</p>
    </div>
  }
}
module.exports = Menu;
