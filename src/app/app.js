let { Component } = React;
let Slide = require('../uiComponent/slide/slide.js')
let Home = require('../page/home/home.js')
let Search = require('../page/search/search.js')
let SearchBar = require('../uiComponent/searchbar/searchbar.js')
let Player = require('../component/player/player.js')
let Service = require('../service/service.js')
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.store = new Service();
  }
  render(){
    //{this.props.children}
    return (
      <div className = "app">
      <Slide ></Slide>
      <SearchBar store = {this.store}></SearchBar>
      <Search store = {this.store}></Search>
      <Player></Player>
      </div>
    )
  }
}

module.exports = App;
