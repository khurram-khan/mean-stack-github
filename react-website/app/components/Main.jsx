var React = require('react'); 
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = Main;
