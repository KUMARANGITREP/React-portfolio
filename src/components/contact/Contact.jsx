import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef as UseRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z7ccx3o',
      'template_cbk5q4f',
      form.current,
      'NuO1baRgMPnrH709g'
    );
    e.target.reset();

    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummyegenerator@gmail.com</h5>
            <a
              href="mailto:dummegator@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a messge
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>egaratortutorials</h5>
            <a
              href="https://m.me/ernest.achiever"
              target="_blank"
              rel="noreferrer"
            >
              Send a messge
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9486790230</h5>
            <a
              href="https://api.whatsapp.com/send?phone+919486790230"
              target="_blank"
              rel="noreferrer"
            >
              Send a messge
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
