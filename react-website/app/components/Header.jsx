var React = require('react');
var {Link, IndexLink} = require('react-router');

var Header = React.createClass({
  render: function () {
    return (
        <header>
        	<nav className="navbar navbar-default ws-navbg navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="ws-logo" href="#"><img src="images/logo.png" alt="" /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li ><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
                        <li ><Link activeClassName="active" to="/gallery">Gallery </Link></li>
                        <li ><Link activeClassName="active" to="/"><img src="images/logo.png" alt="" /></Link></li>
                        <li ><Link activeClassName="active" to="/activities">Activities</Link></li>
                        <li ><Link activeClassName="active" to="/contactus">Contact Us</Link></li>
                      </ul>
                    </div>
                </div>
        	</nav>
      </header>
    );
  }
});

module.exports = Header;
