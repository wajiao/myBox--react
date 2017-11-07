let { Router,Route,IndexRoute} = ReactRouter;
let App = require('../app/app.js');

let routes = (
  <Router>
    <Route path = "/" component = {App}></Route>
  </Router>
)
module.exports = routes;
