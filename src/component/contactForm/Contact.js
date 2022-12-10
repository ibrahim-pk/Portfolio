import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .sendForm(
        "service_q5877ef",
        "template_2yf05ug",
        form.current,
        "gJLvYsaihmbdjTzTe"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
  };
  return (
    <section id="contuct" className="contact py-2  mt-3">
      <div className="container">
        <div className="section-header text-center text-white mb-2 pt-4">
          <h1>Always connect with us</h1>
        </div>
        <div className="col-md-9 py-5 mx-auto">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="form-control  my-2"
              name="user_name"
              placeholder="User Name"
            />

            <input
              type="email"
              className="form-control my-2"
              name="user_email"
              placeholder="Email"
            />

            <textarea
              className="form-control my-2"
              name="message"
              placeholder="Message"
            />
            <input
              className="btn my-2 btn-lg btn-secondary"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
