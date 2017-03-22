var React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
      
      <section className="ws-footer">
        <ul className="list-inline">
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
          <p>© 2017 monalisa.com. All Right Reserved.</p>
  </section>
    );
  }
});

module.exports = Footer;
