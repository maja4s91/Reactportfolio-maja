import { useState } from "react";

const Form = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const [state, setState] = useState({
    email: "",
    name: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleForm = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <form
      className="form contact-form"
      onSubmit={handleForm}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="email">
        <input
          type="text"
          name="email"
          onChange={handleChange}
          id="email"
          value={state.email}
          placeholder="Email*"
          required
        />
      </label>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Subject"
          onChange={handleChange}
          value={state.name}
        />
      </label>
      <label htmlFor="message">
        <textarea
          name="message"
          id="message"
          placeholder="Message*"
          rows="3"
          onChange={handleChange}
          value={state.message}
          required
        ></textarea>
      </label>
      <button className="btn-contact" type="submit">
        Send message
      </button>
    </form>
  );
};

export default Form;
