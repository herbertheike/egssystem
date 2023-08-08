import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import DataList from './pages/DataList';
import NotFound from './component/NotFound';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme({
//Nada aqui
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/datalist" element={<DataList />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
