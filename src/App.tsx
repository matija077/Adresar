import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import createTheme from './utility/theme';
import Adresar from './pages/Adresar/Adresar.page';
import Login from './pages/Login/Login.page';
import Header from './components/header/header.component';

import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createStyles, Theme  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "primary"
    }
  }),
);

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function toggleDarkMode() {
    setDarkMode((state) => !state);
  }

  const user = true;

const theme = createTheme(darkMode);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Header />
            <Switch>
              <Route>
                {
                  user
                    ? <Adresar></Adresar>
                    : <Login></Login>
                }
              </Route>
            </Switch>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
