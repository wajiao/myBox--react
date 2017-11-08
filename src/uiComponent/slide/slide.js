require('./slide.less')
let {Component} = React;
let Login = require("../login/login.js")
let Menu = require("../menu/menu.js")
class Slide extends Component{
  render(){
    return (
      <div className = "slide">
      <Login></Login>
      <Menu></Menu>
      </div>
    )
  }
}
module.exports = Slide;
