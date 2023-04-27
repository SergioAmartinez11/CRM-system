import { Table, TableBody, TableCell, TableRow } from '@mui/material';
const styles = {
    table: {
      backgroundColor: '#f5f5f5',
      borderCollapse: 'collapse',
      border: '1px solid black',
      width: '100%',
    },
    cellHeader: {
      fontWeight: 'bold',
      color: 'black',
      padding: '8px',
      border: '1px solid black',
    },
    cell: {
      color: 'black',
      padding: '8px',
      border: '1px solid black',
    },
  };

export const SimpleTable = (props) => {
  return (
    <Table style={styles.table}>
      <TableBody>
        
        <TableRow>
          <TableCell style={styles.cellHeader}>Empleado:</TableCell>
          <TableCell style={styles.cell}>{props.texto}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
