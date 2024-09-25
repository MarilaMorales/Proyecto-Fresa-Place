import React from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import "../Styles/Contact.css"




const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_56xi5wh', 'template_noqmatl', e.target, 'rV7wVdf0tWzRA66hT')
      .then((result) => {
          console.log('Success:', result.text);
          toast.success('Message sent successfully!');
      }, (error) => {
          console.log('Error:', error.text);
          
          toast.error('Failed to send message. Please try again later.');
      });
    e.target.reset();
  };

  return (
    <div className="containerContact">
      <div>
        <h2 id='TextoContact'>Contactenos</h2>
      </div>

      <form id='formContact6' onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input id="contactName" type="text" className="form-control" placeholder="Name" name="name" required />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input id="contactEmail" type="email" className="form-control" placeholder="Email Address" name="email" required />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input id="contactSubject" type="text" className="form-control" placeholder="Subject" name="subject" required />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea id="contactMessage" className="form-control" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input id="sendMessage" type="submit" className="btn btn-info" value="Send Message" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
