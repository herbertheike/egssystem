import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import logo from "../images/egs.png";
import { useNavigate } from "react-router-dom";

const Header = ({ userData }) => {
  const { nome, sobrenome } = userData[userData.length - 1];
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{backgroundColor:'red'}}>
      <Toolbar style={{backgroundColor:'#1ed4b9', width:'100%', justifyContent:'space-between'}}>
        <Grid
        spacing={0}
        direction="row">
      <img
              src={logo}
              alt="Logo"
              style={{ width: "80px", height: "80px", marginRight: "10px" }}
              onClick={()=> navigate("/")}
            />
            
            </Grid>
        <Typography variant="h5" style={{ }}>
          {userData ? `${nome} ${sobrenome}` : ''}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
