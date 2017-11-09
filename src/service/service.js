let { Component } = React;
class Service extends Component {
  constructor(props) {
    super(props);
    this.msg = {};
  }
  on(type,fn){
    if(this.msg[type]){
      this.msg[type].push(fn)
    }else{
      this.msg[type] = [fn]
    }
  }
  trigger(type,info){
    if(this.msg[type]){
      let arrFn = Array.from(this.msg[type]);
      for(let i = 0 ;i <arrFn.length; i++){
        this.msg[type][i](info)
      }
    }
  }
}
module.exports = Service;
