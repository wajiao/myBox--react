let { Component }  = React;
require('./search.less')
class Search extends Component{
  constructor(props,msg){
    super(props,msg);
  }
  render(){
    return (
      <div className = "search">
      <div>Search</div>
      </div>
    )
  }
  componentDidMount(){
  this.props.store.on("hi",function(res){
    console.log(res)
  })
  }
}
module.exports = Search;
