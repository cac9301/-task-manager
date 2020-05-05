import React from 'react';

const TableList = () => {
    return (
        <div>
            <TableContainer component={Paper}>
<Table className={classes.table} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell align="center">Type of Task</TableCell>
      <TableCell align="center">Edit</TableCell>
      <TableCell align="center">Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {taskproyect.map(row => (
      <TableRow key={row.id}>
        <TableCell align="left" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">
        <Button
        type="submit"
        size="medium"
        variant="contained"
        color="secondary"
        size="small"
        className={classes.submit}
        fullWidth
        startIcon={<DeleteIcon />}
      >
        Delete task
      </Button>
          </TableCell>
        <TableCell align="left">
        <Button
        type="submit"
        size="medium"
        variant="contained"
        color="primary"
        size="small"
        startIcon={<EditIcon />}
        className={classes.submit}
        fullWidth
      >
        Edit task
      </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>

        </div>
    );
};

export default TableList;