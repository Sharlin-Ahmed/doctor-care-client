import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
       <section className="contact my-5 text-white py-5" id='contact'>
           <div className="container">
               <div className="section-header text-center mb-5">
                    <h5 className="text-uppercase">Contact</h5>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group my-2">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group my-2">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group my-2">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group my-2 text-center">
                           <button style={{backgroundColor : '#1cc7c1', fontWeight : '600'}} type="button" className="btn"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;