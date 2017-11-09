
require("./searchbar.less");
let { Component } = React;
let Util = require('../../util/util.js')
class SearchBar extends Util {
  constructor(props,msg){
    super(props,msg)
    this.state = {
      listData:[],
    }
  }
  searchEven(){
    let val = this.refs.searchVal.value;
    if(/^\s*$/.test(val)){
      alert("请输入内容")
      return
    }
    let arr = this.state.listData;
    let result = arr.filter((obj,index)=>{
      for(let key in obj){
        //后面再加 title条件
        if(obj[key].indexOf(val)>=0){
          return true
        }
      }
    })
    this.props.store.trigger("hi",result)
    this.refs.searchVal.value = "";
      //获取内容
      //验证正则(不能为空)
      //后面补充  实时检索数据

  }
  render(){
    console.log(this.state.listData)
    return (
      <div className = "searchbar">
        <input type = "text" placeholder = "search" ref = "searchVal"/>
        <span onClick = {this.searchEven.bind(this)}>search</span>
      </div>
    )
  }
  componentDidMount(){
    this.ajax("data/playerlist.json",(res)=>{
      this.setState({
        listData: res
      })
    })
  }
}
module.exports = SearchBar;
