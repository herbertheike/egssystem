import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";


const Form = ({ formData, onChange, onSubmit }) => {

  const cpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2} style={{alignItems:'center', justifyContent: 'center'}}>
        <Grid item xs={8}>
          <TextField
          size="small"
            InputLabelProps={{
              shrink: true,
            }}
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={onChange}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
          size="small"
            InputLabelProps={{
              shrink: true,
              color:'white'
            }}
            label="Sobrenome"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={onChange}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
          size="small"
            InputLabelProps={{
              shrink: true,
            }}
            label="Data de Nascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={onChange}
            type="date"
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
          size="small"
            InputLabelProps={{
              shrink: true,
              color:'white'
            }}
            label="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
            type="email"
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
          size="small"
            InputLabelProps={{
              shrink: true,
              color:'white'
            }}
            inputProps={{ maxLength: 14 }}
            label="CPF"
            name="cpf"
            value={cpfMask(formData.cpf)}
            onChange={onChange}
            variant="outlined"
            
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            style={{
              color: "white",
              backgroundColor: "#1ed4b9",
              fontWeight: "bold",
              width: '100%'
            }}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
