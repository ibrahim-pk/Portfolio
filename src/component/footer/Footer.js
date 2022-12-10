import React from "react";

import "./style.css";
const Footer = () => {
  return (
    <section id="contuct" className="contact pb-5 pt-1">
      <div className="container">
        <div className="footer">
          <h3>
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </h3>
          {/* <h4>+8801751552822</h4>
          <a href="mailto:emonnstu14@gmail.com">emonnstu14@gmail.com</a> */}
          <div className="mt-5 text-center">
            <a href="https://www.facebook.com/emonahmed.pk">
              <i className="fa text-white fa-2x fa-facebook mr-3"></i>
            </a>
            <a href="https://github.com/ibrahim-pk">
              <i className="fa text-white  fa-2x fa-github mr-3"></i>
            </a>
            <a href="https://www.linkedin.com/in/md-ibrahim-pk-332846198/">
              <i className="fa text-white fa-2x fa-linkedin mr-3"></i>
            </a>
            <a href="mailto:emonnstu14@gmail.com">
              <i className="fa text-white fa-2x fa-envelope mr-3"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
