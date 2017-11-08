let { Component } = React;
require('./login.less')
class Login extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className = "login">
        <div className = "avatar"></div>
        <div className = "user">user</div>
      </div>
    )
  }
}
module.exports = Login;
