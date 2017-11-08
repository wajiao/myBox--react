let { Component }  = React;
require("./player.less")
class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      musicState:"off",
      musicIndex:1
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
    index = index >= 3 ? 3 : ++index;
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
    return (
      <div className = "player">
        {this.addAudio()}
        <div onClick = {this.musicPlayTogo.bind(this)}>player</div>
        <div onClick = {this.last.bind(this)}>last</div>
        <div onClick = {this.next.bind(this)}>next</div>
      </div>
    )
  }
}


module.exports = Player;
