import { createTheme } from '@mui/material/styles';
import { lightPalette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const theme = createTheme({
  cssVariables: {
    cssVarPrefix: 'mui',
  },
  palette: lightPalette,
  typography,
  components,
  shape: {
    borderRadius: 10,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});
