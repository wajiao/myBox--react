let { Router,Route,IndexRoute} = ReactRouter;
let App = require('../app/app.js');
let Home = require('../page/home/home.js');
let List = require('../page/list/list.js');
let Share = require('../page/share/share.js');
let Search = require('../page/search/search.js');

let routes = (
  <Router>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home}></IndexRoute>
      <Route path = "home" component = {Home}></Route>
      <Route path = "list" component = {List}></Route>
      <Route path = "share" component = {Share}></Route>
      <Route path = "search" component = {Search}></Route>
    </Route>
  </Router>
)
module.exports = routes;
