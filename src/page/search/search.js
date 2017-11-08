let { Component }  = React;
let Service = require('../../service/service.js');
require('./search.less')
class Search extends Service{
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
