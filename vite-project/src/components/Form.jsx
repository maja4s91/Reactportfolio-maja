import { useState, useEffect } from "react";

const Form = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleForm = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-react", ...state }),
    })
      .then(() => alert("Success!"))
      .then(() => setState({ email: "", name: "", message: "" }))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <form className="form contact-form" onSubmit={handleForm}>
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
