import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, addProvider } from '../../redux/productsSlice'

function ProviderForm() {
  const [provider, setprovider] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes enviar los datos del formulario al servidor
    //console.log();
    dispatch(addProvider({ provider, address, email, phone }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre del proveedor"
        value={provider}
        onChange={(e) => setprovider(e.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
        type="email"
      />

      <TextField
        label="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        required
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  )
}

export default ProviderForm
