let {Component} = React;
require("./home.less")
class Home extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return  (
    <div className = "home">
      <h1>Home</h1>
    </div>
  )
  }
}
module.exports = Home;
