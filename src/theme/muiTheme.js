import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#00B73B',
      dark: '#006db3',
      contrastText: '#fff',
    },
  },
});

export default theme;