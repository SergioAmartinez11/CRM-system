import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/productsSlice';

const categories = [
  { label: 'Electrónica', value: 'electronics' },
  { label: 'Hogar', value: 'home' },
  { label: 'Juguetes', value: 'toys' },
  { label: 'Ropa', value: 'clothing' },
];

function ProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor
    //console.log({ name, description, category, price });
    dispatch(addProduct({name,description,category,price}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <Select
        label="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        fullWidth
        margin="normal"
      >
        {categories.map((cat) => (
          <MenuItem key={cat.value} value={cat.value}>
            {cat.label}
          </MenuItem>
        ))}
      </Select>

      <TextField
        label="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        required
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default ProductForm;
