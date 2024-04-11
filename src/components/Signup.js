import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("REGISTRATION SUCC_ESSFUL: ", data)
      } else {
        console.log("FAILED REGISTRATION, Please try again.")
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <div>
      <h2>Account Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
        </div>
        
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <div>
            <label>Email:</label>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <div>
            <label>Create Password</label>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
