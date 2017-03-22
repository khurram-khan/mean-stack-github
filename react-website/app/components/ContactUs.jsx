var React = require('react');

var ContactUs = React.createClass({
  render: function () {
    return (
      <main>
    	<section className="ws-greybg3">
        	<section className="container">
            	<div className="row">
                	<section className="col-lg-9 col-md-9 col-sm-9 center-block ws-gallery ws-margin">
                    	<h2 className="ws-heading2">Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar nisl eget neque maximus, in pharetra libero condimentum. In suscipit sit amet dolor sit amet sodales. Sed elementum hendrerit nisl, dignissim varius augue lacinia tempus. Aenean nec auctor odio. Vivamus a condimentum neque. Morbi vel fringilla orci. </p>
                    </section>
                </div>
                <div className="row">
                    <section className="col-lg-12 center-block">
                        <div className="ws-address ws-email ws-imgtop">
                            <h3 className="ws-heading3">Email</h3>
                            <p>monalisa.com</p>
                            <span className="ws-border2"></span>
                        </div>
                        <div className="ws-address ws-phone ws-imgtop">
                            <h3 className="ws-heading3">Phone</h3>
                            <p>0000-0000-000</p>
                            <span className="ws-border2"></span>
                        </div>
                        <div className="ws-address ws-locate ws-imgtop">
                            <h3 className="ws-heading3">Addres</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </section>
                </div>
                <div className="row">
                	<section className="col-lg-12 ws-form">
                    	<h2 className="ws-heading2">Get in touch with us</h2>
                        <span>If you have any question. Please don't hesitate to send us a message</span>
                        <form action="">
                        	<div className="row">
                            	<section className="col-lg-4 col-md-4 col-sm-4">
                                	<div className="form-group">
                                		<input type="text" className="form-control"  placeholder="Enter your name..." />
                                  </div>
                                </section>
                                <section className="col-lg-4 col-md-4 col-sm-4">
                                	<div className="form-group">
                                		<input type="email" className="form-control"  placeholder="Enter your-email"/>
                                    </div>
                                </section>
                                <section className="col-lg-4 col-md-4 col-sm-4">
                                	<div className="form-group">
                                		<input type="text" className="form-control"  placeholder="Subject (Optional)"/>
                                    </div>
                                </section>
                            </div>
                            <div className="row">
                            	<section className="col-lg-12">
                                	<div className="form-group">
                                		<textarea className="form-control"  placeholder="Here goes your message"></textarea>
                                    </div>
                                    <button type="submit">Send Message</button>
                                </section>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </section>
        <div className="ws-map">
        	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69329203374!2d-0.38178246832069745!3d51.52830797070906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2s!4v1489821987335" width="100%" height="500" frameBorder="0" style={{border:'0'}} allowFullScreen></iframe>
        </div>
        <section className="ws-greybg2">
        	<section className="container">
                <div className="row">
                    <section className="col-lg-11 col-md-11 col-sm-11 center-block">
                        <div className="ws-address ws-email">
                            <h3 className="ws-heading3">Email</h3>
                            <p>monalisa.com</p>
                        </div>
                        <div className="ws-address ws-phone">
                            <h3 className="ws-heading3">Phone</h3>
                            <p>0000-0000-000</p>
                        </div>
                        <div className="ws-address ws-locate">
                            <h3 className="ws-heading3">Addres</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </section>
                </div>
            </section>
        </section>
        <div id="carousel-example-generic" className="ws-carousel2 carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="ws-thumbnail">
              	<img src="images/1.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/2.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/3.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/4.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/5.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/6.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/7.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/8.jpg" alt="" />
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="item">
               <div className="ws-thumbnail">
              	<img src="images/1.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/2.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/3.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/4.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/5.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/6.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/7.jpg" alt="" />
              </div>
              <div className="ws-thumbnail">
              	<img src="images/8.jpg" alt="" />
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
    </main>
    );
  }
});

module.exports = ContactUs;
