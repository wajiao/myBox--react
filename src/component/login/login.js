let { Component } = React;
require('./login.less')
class Login extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className = "login">login</div>
    )
  }
}
module.exports = Login;
