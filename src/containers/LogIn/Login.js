import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={Logo} alt="Shortly Logo" />
      </div>

      <form action="" onSubmit={handleSubmit} className="login__form">
        <label htmlFor="email" className="login__form__label">
          Email me a secure login
        </label>
        <input
          type="text"
          className="login__form__input"
          value={email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
        <Button title="Send" variant="btn-login" />
      </form>
    </div>
  );
};

export default Login;