
require('./search.less')
let { Component }  = React;

class Search extends Component{
  constructor(props,msg){
    super(props,msg);
    this.state = {
      listData:[]
    }
  }
  createList(){
    return this.state.listData.map((obj,index)=>{
      return (
              <li key = {index}>
                <div className = "img"><img src = {"img/playerlist/"+obj.url}/></div>
                <div className = "title">{obj.title}</div>
                <div className = "publisher">{obj.publisher}</div>
              </li>
            )
    })

  }
  render(){

    return (
      <div className = "search">
      <div>Search</div>
      {this.createList()}

      </div>
    )
  }
  componentDidMount(){
  this.props.store.on("hi",(res)=>{
    this.setState({
      listData : res
    })
  })
  }
}
module.exports = Search;
