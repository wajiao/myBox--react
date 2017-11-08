let { Component } = React;
let Slide = require('../uiComponent/slide/slide.js')
let Home = require('../page/home/home.js')
let SearchBar = require('../uiComponent/searchbar/searchbar.js')
let Player = require('../component/player/player.js')
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
      <SearchBar></SearchBar>
      <Player></Player>
      </div>
    )
  }
}
module.exports = App;
