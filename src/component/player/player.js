let { Component }  = React;
require("./player.less")
class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      musicState:"off",
      musicIndex:1,
      rate:0,
    }
  }
  //  play/pause
  // have  bug dobble
  musicPlayTogo(){
    let index = this.state.musicIndex;
    let val = this.refs[index];

    if(this.state.musicState==="off"){
      this.setState({
        musicState:"on"
      })
      val.play();

    }else if(this.state.musicState==="on"){
      this.setState({
        musicState:"off"
      })
      val.pause();
    }
  }
  last(){
    let index = this.state.musicIndex;
    let lastVal = this.refs[index];
    lastVal.pause();
    index = index <= 0 ? 0 : --index;
    let currentVal = this.refs[index];
    currentVal.load();
    currentVal.play();
    this.setState({
      musicState:"off",
      musicIndex:index,
    })
  }
  next(){
    let index = this.state.musicIndex;
    let lastVal = this.refs[index];
    lastVal.pause();
    index = index >= 2 ? 2 : ++index;
    let currentVal = this.refs[index];
    currentVal.load();
    currentVal.play();
    this.setState({
      musicState:"off",
      musicIndex:index,
    })
  }
  addAudio(){
    let data = ["cut.mp3","beautiful.mp3","nervous.mp3"];
    return data.map((item,index)=>{
      let address = "mp3/" + item;
      return <audio key = {index} ref={index} src = {address}></audio>
    })
  }
  render(){
    //考虑怎么去get数据，怎么去load合适些
    //怎么保持数组持有3个数据
    // let src = ["cut.mp3","beautiful.mp3","nervous.mp3"]
    //原生的样式，iq能不能用
    // $scope.rate = ($scope.media[$scope.index].currentTime /$scope.media[$scope.index].duration
    let index = 0;
    let playerStyle = {backgroundImage:"url("+"img/icon/player.png" +")"}
    if(this.state.musicState=="off"){
       playerStyle = {backgroundImage:"url("+"img/icon/player.png" +")"}
    }else{
       playerStyle = {backgroundImage:"url("+"img/icon/parse.png" +")"}
    }

    let lastStyle = {
      backgroundImage:"url("+"img/icon/last.png" +")",
    }
    let nextStyle = {
      backgroundImage:"url("+"img/icon/next.png" +")",
    }
    let barStyle = {
      width:(this.state.rate *800)+"px",

    }
    console.log(barStyle)
    return (
      <div className = "player">
        {this.addAudio()}
        <div className = "last" style = {lastStyle} onClick = {this.last.bind(this)}></div>
        <div className = "pause" style = {playerStyle} onClick = {this.musicPlayTogo.bind(this)}></div>
        <div className = "next" style = {nextStyle} onClick = {this.next.bind(this)}></div>
        <div className = "bar" style = {barStyle} onClick = {this.next.bind(this)}></div>
      </div>
    )
  }
 componentDidMount(){

   let timer = setInterval(()=>{
     let index = this.state.musicIndex;
     let val = this.refs[index];
      let rate = val.currentTime/val.duration
      this.setState({rate:rate})
      console.log(rate,index)
   },1000)
 }
 componentWillUnmount(){
   clearInterval(timer)
 }
}

module.exports = Player;
