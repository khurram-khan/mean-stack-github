var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var Main = require('./components/Main.jsx');
var MainSection = require('./components/MainSection.jsx');
var Gallery = require('./components/Gallery.jsx');
var Activities = require('./components/Activities.jsx');
var ContactUs = require('./components/ContactUs.jsx');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" components={Main}>
      <Route path="contactus" components={ContactUs} />
      <Route path="gallery" components={Gallery} />
      <Route path="activities" components={Activities} />
      <IndexRoute components={MainSection} />
    </Route>
  </Router>,
  document.getElementById('app')
);
