let { Component } = React;
let Slide = require('../component/slide/slide.js')
let Content = require('../component/content/content.js')
class App extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className = "app">
      <Slide></Slide>
      <Content></Content>
      </div>
    )
  }
}
module.exports = App;
