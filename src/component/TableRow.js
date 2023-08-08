import React from 'react';
import { TableRow as MuiTableRow, TableCell } from '@material-ui/core'

const TableRowComponent = (item) => {
  let data = item?.data;
  let date = new Date(data.dataNascimento);
let dateNascFormat = ((date.getDate()+1)) + "/" + ((date.getMonth()+1))+ "/" +date.getFullYear()

  return (
    <MuiTableRow>
      <TableCell>{data.nome}</TableCell>
      <TableCell>{data.sobrenome}</TableCell>
      <TableCell>{dateNascFormat}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.cpf}</TableCell>
    </MuiTableRow>
  );
};

export default TableRowComponent;
