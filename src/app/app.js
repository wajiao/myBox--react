let { Component } = React;
let Slide = require('../component/slide/slide.js')
let Home = require('../page/home/home.js')
class App extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    console.log(this.props)
    return (
      <div className = "app">
      <Slide></Slide>
      {this.props.children}
      </div>
    )
  }
}
module.exports = App;
