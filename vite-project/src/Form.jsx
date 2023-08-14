import { useState } from "react";

const Form = () => {
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
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(state).toString(),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  return (
    <form
      className="form contact-form"
      onSubmit={handleForm}
      name="contact"
      method="POST"
      netlify
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
