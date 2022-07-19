import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";
import { createPortal } from "react-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [error, setError] = useState()

  const handleNameChange = ({ target: { value } }) => setName(value);
  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handleMessageChange = ({ target: { value } }) => setMessage(value);

  const sendContactData = async (contactDetailsData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetailsData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        name,
        email,
        message,
      });

      setRequestStatus("success");
      setEmail('')
      setName('')
      setMessage('')
    } catch (err) {
      setError(err.message)
      setRequestStatus("error");
    }
  };

  let notificationData;
  
  if (requestStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way.'
    }
  }
  if (requestStatus === 'success') {
    notificationData = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully.'
    }
  }
  if (requestStatus === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error!',
      message: error
    }
  }

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const  timer = setTimeout(() => {
        setRequestStatus(null)
        setError(null)
      } , 3000)
      return () => clearTimeout(timer)
    }

  }, [requestStatus])


  return (
    <section className={classes.contact}>
      <h1>Size nasıl yardımcı olabilirim?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">E-Posta Adresiniz</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">İsminiz</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              cols="5"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>

          <div className={classes.actions}>
            <button>Mesaj Gönder</button>
          </div>
        </div>
      </form>
      {notificationData && createPortal(<Notification title={notificationData.title} message={notificationData.message} status={notificationData.status} />, document.getElementById('notifications'))}
    </section>
  );
};

export default ContactForm;
