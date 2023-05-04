import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../redux/authSlice'
import styles from '../../styles/LoginForm.module.css'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const error = useSelector((state) => state.auth.error)
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    dispatch(login(username, password))

  
  }

  const handleAccess = () =>
  {
    navigate('/Dashboard');
  }

  if (token) {
    //Usuario loggeado correctamente
    handleAccess();
    
  } else {
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
        <button type="submit" className={styles.button}>
          Ingresar
        </button>
      </form>
    )
  }
}

export default LoginForm
