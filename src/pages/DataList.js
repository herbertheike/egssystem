import React from 'react';
import { Container, Paper, Grid } from '@material-ui/core';
import DataTable from '../component/Table';
import Header from '../component/Header';

const DataList = () => {
  // Obter os dados armazenados no localStorage.
  const userData = JSON.parse(localStorage.getItem('userData')) || [];

  return (
    <Container maxWidth="100vh" 
    style={{
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      display: "contents",
      backgroundColor: '#eaeaea'
    }}>
       <Header userData={userData} />
       <Grid container justifyContent='center' alignItems='center' >
      <Paper style={{ padding: '0px', marginTop: '50px', maxWidth:'80%'}}>
        <DataTable data={userData} />
      </Paper>

      </Grid>
    </Container>
  );
};

export default DataList;
