let { Component }  = React;
require('./search.less')
class Search extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className = "search">
      <div>Search</div>
      </div>
    )
  }
}

module.exports = Search;
