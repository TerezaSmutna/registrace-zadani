import React, { useState } from 'react';

const Registration = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleBlur = () => {
    if (!user.username && user.email.includes('@')) {
      const parts = user.email.split('@');
      setUser({ ...user, username: parts[0] });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.passwordConfirm) {
      alert('Hesla se neshodují.');
      return
    } else {
      console.log(user);
    }
  }

  return (
    <div className="container">
      <header>
        <div className="registration" />
        <h1>Registration</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="label">Email Address:</div>
            <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} onBlur={handleBlur} />
          </label>
          <br></br>
          <br></br>
          <label>
            <div className="label">User Name:</div>
            <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
          </label>
          <br></br>
          <br></br>
          <label>
            <div className="label">Password:</div>
            <input type="text" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
          </label>
          <br></br>
          <br></br>
          <label>
            <div className="label">Confirm Password:</div>
            <input type="text" value={user.passwordConfirm} onChange={(e) => setUser({ ...user, passwordConfirm: e.target.value })} />
          </label>
          <br></br>
          <br></br>

          <button className="btn" type="submit">REGISTER</button>
        </form>
      </main>
    </div>
  );
};

export default Registration;



