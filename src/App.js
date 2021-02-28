import React from 'react'
import Route from './routes'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#5dd7aa',
        main: '#1CC88A',
        dark: '#258f68',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#728fe5',
        main: '#4F73DF',
        dark: '#37509c',
        contrastText: '#ffffff',
      }
    }
  })

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </div>
  );
}

export default App;
