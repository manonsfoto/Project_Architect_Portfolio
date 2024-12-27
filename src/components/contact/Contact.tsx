import "./Contact.css";
import imgContact from "/public/img/contact.png";
const Contact = () => {
  return (
    <section className="stn-contact side-padding">
      <h1>Contact Us</h1>
      <div className="flex box-contact">
        <form className="flex">
          <input type="text" placeholder="Name" className="small-input" />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="required small-input"
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            className="required small-input"
          />
          <input
            type="text"
            placeholder="Interested In"
            className="small-input"
          />
          <input
            className="required input-msg"
            type="text"
            placeholder="Message"
            required
          />
        </form>
        <img src={imgContact} alt="telephoning man" />
      </div>
      <button type="button" className="light-mode">
        send email →
      </button>
    </section>
  );
};

export default Contact;
