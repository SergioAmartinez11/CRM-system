import React, { useState } from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField} from '@mui/material'


const StyledTableCell = makeStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = makeStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    marginBottom: '1rem',
  },
  input: {
    marginBottom: '0.5rem',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const status = form.status.value;
    const newProduct = createData(name, category, price, quantity, status);
    setProducts([...products, newProduct]);
    form.reset();
  };

  const handleDeleteProduct = (name) => {
    const updatedProducts = products.filter((product) => product.name !== name);
    setProducts(updatedProducts);
  };

  return (
    <>
      <form onSubmit={handleAddProduct} className={classes.form}>
        <TextField
          name="name"
          label="Product Name"
          variant="outlined"
          className={classes.input}
          required
        />
        <TextField
          name="category"
          label="Category"
          variant="outlined"
          className={classes.input}
          required
        />
        <TextField
          name="price"
          label="Price"
          variant="outlined"
          type="number"
          className={classes.input}
          required
        />
        <TextField
          name="quantity"
          label="Quantity"
          variant="outlined"
          type="number"
          className={classes.input}
          required
        />
        <TextField
          name="status"
          label="Status"
          variant="outlined"
          className={classes.input}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Add Product
        </Button>
      </form>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>

            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>

      <TableBody>
        {products.map((product) => (
          <StyledTableRow key={product.name}>
            <StyledTableCell component="th" scope="row">
              {product.name}
            </StyledTableCell>
            <StyledTableCell align="right">{product.category}</StyledTableCell>
            <StyledTableCell align="right">{product.price}</StyledTableCell>
            <StyledTableCell align="right">{product.quantity}</StyledTableCell>
            <StyledTableCell align="right">{product.status}</StyledTableCell>
            <StyledTableCell align="right">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteProduct(product.name)}
              >
                Delete
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>

  </TableContainer>
</>
);
}

function createData(name, category, price, quantity, status) {
return { name, category, price, quantity, status };
}

