let {Component} = React;
require("./share.less")
class Share extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return  <div className = "share">
      <h1>Share</h1>
    </div>
  }
}
module.exports = Share;
