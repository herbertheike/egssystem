import React, { useState } from "react";
import { Container, Typography, Paper, Box, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Form from "../component/Form";
import logo from "../images/egs.png";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    email: "",
    cpf: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    userData.push({ ...formData });
    localStorage.setItem("userData", JSON.stringify(userData));
    
    navigate("/datalist");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container
      maxWidth="100vh"
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: '#eaeaea'
      }}
    >
      <Grid
        container
        spacing={0}
        direction="row"
        style={{ width: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={6}>
          <Paper
            square
            style={{
              display: "flex",
              backgroundImage:
                "linear-gradient(263deg, rgba(2,0,36,1) 0%, rgba(0,206,255,1) 0%, rgba(3,255,218,1) 100%)",
              padding: "20px",
              height: "80vh",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius:'20px',
              borderBottomLeftRadius:'20px'
            }}
            elevation={8}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", height: "150px" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            square
            style={{
              display: "flex",
              backgroundColor: "#EDEADE",
              padding: "20px",
              height: "80vh",
              borderTopRightRadius:'20px',
              borderBottomRightRadius:'20px'
            }}
            elevation={8}
          >
            <Box style={{ flexDirection: "column", alignItems: "center" }}>
              <Typography
                variant="h6"
                style={{ textAlign: "center", color: '#151515', fontWeight:'bold', letterSpacing: '1.5px'}}
              >
                TESTE
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center", color: "#1c9180" }}
              >
                EGS Sistemas
              </Typography>
              <Form
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
