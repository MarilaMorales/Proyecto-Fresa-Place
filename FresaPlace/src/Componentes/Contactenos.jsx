import React from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';






const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_56xi5wh', 'template_noqmatl', e.target, 'rV7wVdf0tWzRA66hT')
      .then((result) => {
          console.log('Success:', result.text);
          toast.success('Message sent successfully!');
      }, (error) => {
          console.log('Error:', error.text);
          toast.error ('Failed to send message. Please try again later.');
      });
      e.target.reset()
  };





  
  return (
    <div>
      <div className="containerContact">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name" required />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email" required />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject" required />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea className="form-control" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="submit" className="btn btn-info" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
