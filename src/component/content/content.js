let {Component} = React;
require("./content.less")
class Content extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return  <div className = "content">
      <h1>content</h1>
    </div>
  }
}
module.exports = Content;
