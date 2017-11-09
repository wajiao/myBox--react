//配置数据
let CONF = require("../../conf.js")
let {Component} = React;
require("./home.less")
class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      song:CONF.SONG,
      album:CONF.ABLUM,
      hotlist:CONF.HOTLIST
    }
  }
  createList(data){
    return data.map((obj,index)=>{
      return <li key = {index}>
          <div className="img"><img src={"img/home/"+obj.url}/></div>
          <span className="name">{obj.name}</span>
          <span className="singer">{obj.singer}</span>
        </li>
    })
  }
  render(){
    return  (
    <div className="home" >
      <div className ="banner"><img src = "img/home/banner_01.jpg"/></div>
    	<section className="newSong">
      	<h2 > 新歌首发</h2>
      	<ul className="song" >
        {this.createList(this.state.song)}
      	</ul>
    	</section>
    	<section className="newAlbum">
      	<h2> 专辑首发</h2>
      	<ul className="album">
      		{this.createList(this.state.album)}
      	</ul>
    	</section>
    	<section className="hotList">
      	<h2> 热门推荐</h2>
      	<ul className="hotlist">
      		{this.createList(this.state.hotlist)}
      	</ul>
    	</section>
  </div>
  )
  }
}
module.exports = Home;
