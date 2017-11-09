let {Component} = React;
require("./list.less")
let Util = require("../../util/util.js")
class List extends Util{
  constructor(props) {
    super(props)
    this.state = {
      listData:[]
    };
  }
  createList(){

    return this.state.listData.map((obj,index)=>{
      return (
        <li key = {index}>
        <div className = "img"><img src = {"img/playerlist/"+obj.url}/></div>
        <div className = "title">{obj.title}</div>
        <div className = "publisher">{obj.publisher}</div>
      </li>
    )
    })
  }
  render(){
    return  <div className = "list">
      {this.createList()}
    </div>
  }
  componentDidMount(){
    this.ajax("data/playerlist.json",(res)=>{
      this.setState({listData:res})
    })
  }
}
module.exports = List;
