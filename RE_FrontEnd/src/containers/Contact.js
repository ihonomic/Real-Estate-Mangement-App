import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const Contact = ({ setAlert }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    setLoading(true);
    axios
      .post("http://127.0.0.1:8000/api/contact/", {
        name,
        email,
        subject,
        message,
      })
      .then((res) => {
        setAlert("Message Sent", "success");
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setAlert("Unable to send mail, please try again", "error");
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <div className="contact">
      <Helmet>
        <title>QuickOwner - Contact Us 24/7</title>
        <meta
          name="Contact us page"
          content="Reach us 24/7, Our team will be happy to help out with your questions"
        />
      </Helmet>
      <form className="contact__form" onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="name" className="contact__form__label">
          Name<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className="contact__form__input"
          placeholder="John Doe"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
        />

        <label htmlFor="email" className="contact__form__label">
          Email<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="email"
          className="contact__form__input"
          placeholder="JohnDoe@QuickOwner.com"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />

        <label htmlFor="sunject" className="contact__form__label">
          Subject<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className="contact__form__input"
          placeholder="Need a new Home"
          name="subject"
          value={subject}
          onChange={(e) => onChange(e)}
          required
        />

        <label htmlFor="message" className="contact__form__label">
          Message
        </label>
        <textarea
          cols="30"
          rows="10"
          className="contact__form__textarea"
          placeholder=""
          name="message"
          value={message}
          onChange={(e) => onChange(e)}
          required
        />

        {loading ? (
          <div className="contact__form__loader">
            <Loader type="Oval" color="#424242" height={50} width={50} />
          </div>
        ) : (
          <button className="contact__form__button " htmltype="submit">
            Send
          </button>
        )}
      </form>
    </div>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Contact);
