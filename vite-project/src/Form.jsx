const Form = () => {
  return (
    <form
      className="form-box"
      name="contacts"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contacts" />

      <div className="form contact-form">
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email*"
            required
          />
        </label>
        <label htmlFor="name">
          <input type="text" name="name" id="name" placeholder="Subject" />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            placeholder="Message*"
            rows="3"
            required
          ></textarea>
        </label>
        <button className="btn-contact">Send message</button>
      </div>
    </form>
  );
};

export default Form;
