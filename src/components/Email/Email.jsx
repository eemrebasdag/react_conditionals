import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState();
  const [inputIsInvalid, setInputIsInvalid] = useState(false);

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  };

  const submitFormHandler = event => {
    event.preventDefault();
    const emailIsValid = email.includes("@");
    setInputIsInvalid(!emailIsValid);
  };

  return (
    <section>
      <form onSubmit={submitFormHandler}>
        <label htmlFor='email'>Your email</label>
        <input type='text' id='email' onChange={emailChangeHandler} />
        <button>Submit</button>
      </form>

      {inputIsInvalid && <p>Invalid email address enterd!</p>}
    </section>
  );
};

export default Email;
