let { Router,Route,IndexRoute} = ReactRouter;
let App = require('../app/app.js');
let Home = require('../page/home/home.js');
let List = require('../page/list/list.js');
let Share = require('../page/share/share.js');

let routes = (
  <Router>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home}></IndexRoute>
      <Route path = "list" component = {List}></Route>
      <Route path = "share" component = {Share}></Route>
    </Route>
  </Router>
)
module.exports = routes;
