var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load boostrap
require('style!css!bootstrap/dist/css/bootstrap.min.css')

// App css
require('style!css!applicationStyles') // Add sass! after css! when using sass

ReactDOM.render(
  <Main></Main>,document.getElementById('app')
);
