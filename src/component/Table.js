import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import TableRowComponent from './TableRow';

const DataTable = ({ data }) => {

  
  return (
    <Table style={{ padding:0}}>     
      <TableHead style={{backgroundColor:'#32425b'}}>
        <TableRow>
          <TableCell style={{color: 'white', fontWeight:'bold'}}>Nome</TableCell>
          <TableCell style={{color: 'white', fontWeight:'bold'}}>Sobrenome</TableCell>
          <TableCell style={{color: 'white', fontWeight:'bold'}}>Data de Nascimento</TableCell>
          <TableCell style={{color: 'white', fontWeight:'bold'}}>Email</TableCell>
          <TableCell style={{color: 'white', fontWeight:'bold'}}>CPF</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRowComponent key={index} data={item} />
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
