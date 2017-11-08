let { Component } = React;
require("./searchbar.less")
class SearchBar extends Component {
  render(){
    return (
      <div className = "searchbar">
        <input type = "text" placeholder = "search"/>
      </div>
    )
  }
}
module.exports = SearchBar;
