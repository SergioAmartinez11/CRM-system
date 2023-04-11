import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(event){
      console.log(event);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.username}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          className={styles.input}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className={styles.password}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          className={styles.input}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" className={styles.button}>Ingresar</button>
    </form>
  );
}

export default LoginForm;
