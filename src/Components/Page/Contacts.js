import React from 'react';
import {Link} from 'react-router-dom';
class Contact extends React.Component {


    render() {
        return (
            <section classeName="my-5 py-5">
            <div className="container">
            <div className="well well-ml">
            <h3><strong>Our Location</strong></h3>
            </div>
            
            <div classeName="row">
            
            <div className="col-md-5">
            <iframe src="https://www.google.com/maps/d/embed?mid=1ryv7rbDy8pt_s819Fa4Vy8Pad8kkBuDL" style={{border:'0',
        width:'100%',
    height:'315px',
frameborder:'0'}} allowFullScreen />

            </div>
            <div className="col-md-5">
            <h4><strong>Contact us</strong></h4>
            <form>
            <div className="from-group">
            <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="from-group">
            <input type="text" className="form-control" placeholder="lastName"/>
            </div>
            <div className="from-group">
            <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
            <input type="tel" className="form-control" placeholder="Phone"/>
            </div>
           
         <textarea  className="from-control" cols="30" rows="3" placeholder ="Message"/>
         </form>
         <Link className="btn btn-outline-primary text-uppercase " > 
         <i className="fa fa-paper-plane-o" aria-hidden="true"/>
              <i classeName="fab fa-telegram-plane" />&nbsp; send
         </Link>
            </div>
            </div>
            </div>
            </section>
        );
    }
}



export default Contact;