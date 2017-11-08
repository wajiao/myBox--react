let { Component } = React;
class Service extends Component{
  constructor(props){
    super(props);
    this.msg = {};
  }
  on(type,fn){
    console.log("on");
    if(this.msg[type]){
      this.msg[type].push(fn)
    }else{
      this.msg[type] = [fn]
    }
    console.log(this.msg)
  }
  touch(type){
    console.log("trigger")
    // let arg = [].slice.call(arguments,1)
    console.log(this.msg)
    if(this.msg[type]){
      let msgArr = Array.from(this.msg[type])
      console.log(msgArr)
      for(let i = 0; i < msgArr.length; i++){
        msgArr[i]();
      }
    }
  }
}
module.exports = Service
