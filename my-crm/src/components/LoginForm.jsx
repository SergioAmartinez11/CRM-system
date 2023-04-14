import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let transaction = {key:'my_key123', username: username, password: password, name:name, lastname:lastname };
    let transactionJson = JSON.stringify(transaction);
    fetch('http://localhost:3003/userauth', {
      method: 'Post',
      body: transactionJson
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.username}>
        <label htmlFor="username">Nombre:</label>
        <input
          type="text"
          id="username"
          value={name}
          className={styles.input}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className={styles.username}>
        <label htmlFor="username">Apellido:</label>
        <input
          type="text"
          id="username"
          value={lastname}
          className={styles.input}
          onChange={(event) => setLastname(event.target.value)}
        />
      </div>
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
      <button type="submit" className={styles.button}>
        Ingresar
      </button>
    </form>
  );
}

export default LoginForm;
