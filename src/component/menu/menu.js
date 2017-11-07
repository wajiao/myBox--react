let { Component} = React;
require('./menu.less')
class Menu extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return <div className = "menu">Menu</div>
  }
}
module.exports = Menu;
