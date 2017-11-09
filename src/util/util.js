let { Component } = React;
class Util extends Component {
  constructor(props) {
    super(props)
  }
  ajax(url, fn) {
    // 创建xhr
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        console.log(xhr.status)
        if (xhr.status === 200) {
          console.log(xhr.status)
          fn(JSON.parse(xhr.responseText))
        }
      }
    }
    xhr.open('GET', url, true);
    xhr.send(null)
  }
}

module.exports = Util;
