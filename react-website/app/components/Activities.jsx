var React = require('react');

var Activities = React.createClass({
  render: function () {
    return (
      <main>
    	<section className="ws-greybg3">
        	<section className="container">
            	<div className="row">
                	<section className="col-lg-9 col-md-9 col-sm-9 center-block ws-gallery ws-margin">
                    	<h2 className="ws-heading2">Activities</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar nisl eget neque maximus, in pharetra libero condimentum. In suscipit sit amet dolor sit amet sodales. Sed elementum hendrerit nisl, dignissim varius augue lacinia tempus. Aenean nec auctor odio. Vivamus a condimentum neque. Morbi vel fringilla orci. </p>
                    </section>
                </div>
            </section>
        </section>
        <section className="ws-grey">
        	<section className="container">
            	<div className="row">
                	<section className="col-lg-6 col-md-6 col-sm-6">
                    	<div className="ws-textwrap">
                        	<h2 className="ws-heading2">Zip-line adventures</h2>
                            <span>ONE OF THE BEST PLACES TO RELAX & ENJOY</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar nisl eget neque maximus, in pharetra libero condimentum. In suscipit sit amet dolor sit amet sodales. Sed elementum hendrerit nisl, dignissim varius augue lacinia tempus. Aenean nec auctor odio. Vivamus a condimentum neque. Morbi vel fringilla orci. </p>
                            <a className="ws-read" href="#">Read More</a>
                        </div>
                    </section>
                    <section className="col-lg-6 col-md-6 col-sm-6 ws-img">
                    	<figure>
                        	<img className="img-responsive" src="images/adventures.jpg" alt="" />
                        </figure>
                    </section>
                </div>
            </section>
        </section>
        <section className="ws-foodbg ws-cycle">
        	<h2 className="ws-heading2">Best summer ever</h2>
            <span className="ws-border"></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar nisl eget neque maximus, in pharetra libero
condimentum.</p>
        </section>
        <section className="ws-grey">
        	<section className="container">
            	<div className="row">
                    <section className="col-lg-6 col-md-6 col-sm-6 ws-img">
                    	<figure>
                        	<img className="img-responsive" src="images/pedal.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col-lg-6 col-md-6 col-sm-6">
                    	<div className="ws-textwrap">
                        	<h2 className="ws-heading2">Pedal & Paddle</h2>
                            <span>ONE OF THE BEST PLACES TO RELAX & ENJOY</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar nisl eget neque maximus, in pharetra libero condimentum. In suscipit sit amet dolor sit amet sodales. Sed elementum hendrerit nisl, dignissim varius augue lacinia tempus. Aenean nec auctor odio. Vivamus a condimentum neque. Morbi vel fringilla orci. </p>
                            <a className="ws-read" href="#">Read More</a>
                        </div>
                    </section>
                </div>
            </section>
        </section>
        <section className="ws-foodbg ws-camp">
        	<h2 className="ws-heading2">Book now & save</h2>
            <span className="ws-border"></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar nisl eget neque maximus, in pharetra libero
condimentum.</p>
        </section>
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

module.exports = Activities;
