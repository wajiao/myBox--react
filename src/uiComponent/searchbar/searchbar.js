let { Component } = React;
let Service = require('../../service/service.js');
require("./searchbar.less")

class SearchBar extends Service {
  searchEven(){

  let val = this.refs.searchVal.value;
  if(/^\s+$/.test(val)){
    alert("请输入内容")
    return
  }
  let arr = ["123","34","43534","34"];
  let result = arr.filter((item)=>{
    if(item.indexOf(val) >= 0){
      return true
    }
  })
  this.touch("hi");
  this.refs.searchVal.value = "";
    //获取内容
    //验证正则(不能为空)
    //有时间再  实时检索数据

  }
  render(){
    return (
      <div className = "searchbar">
        <input type = "text" placeholder = "search" ref = "searchVal"/>
        <span onClick = {this.searchEven.bind(this)}>search</span>
      </div>
    )
  }
}
module.exports = SearchBar;
