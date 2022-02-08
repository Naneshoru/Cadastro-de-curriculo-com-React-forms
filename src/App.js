import Registration from './components/Registration';

import './App.scss';
import Variables from './sass/variables.scss'
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme ({
  overrides: {
    MuiOutlinedInput: {
      multiline: {
        color: 'white' // cor do placeholder do TextField multiline (textarea)
      }
    },

    MuiSelect: {
      select: {
        color: 'white',
        backgroundColor: Variables.mainBrand,
      }
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Registration />
      </div>
    </ThemeProvider>
  );
}

export default App;
export {Variables}