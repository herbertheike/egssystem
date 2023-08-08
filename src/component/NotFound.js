import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Error404Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h1" className={classes.text}>
          404
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Parece que você se perdeu
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Voltar para a página principal
        </Button>
      </div>
    </div>
  );
};

export default Error404Page;
