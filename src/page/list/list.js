let {Component} = React;
require("./list.less")
class List extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return  <div className = "list">
      <h1>List</h1>
    </div>
  }
}
module.exports = List;
