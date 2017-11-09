let { Component } = React;
require("./searchbar.less");

class SearchBar extends Component {
  constructor(props,msg){
    super(props,msg)
    // this.msg = msg;
  }
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
    this.props.store.trigger("hi",result)
    this.refs.searchVal.value = "";
      //获取内容
      //验证正则(不能为空)
      //后面补充  实时检索数据

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
