import { PaletteOptions } from '@mui/material/styles';

const colors = {
  primary: '#429EFF',
  primaryHover: '#429EFF',
  dark: '#1E1E1E',
  white: '#FFFFFF',
  gray: '#8496AF',
  grayLight: '#DCE7F1',
  blueLight: '#EAF5FF',
  bg: '#F6F7FB',
  success: '#1AB889',
  error: '#FF5E5B',
  textPrimary: '#1E1E1E',
  textSecondary: '#8496AF',
};

export const lightPalette: PaletteOptions = {
  primary: {
    main: colors.primary,
    light: colors.blueLight,
    dark: colors.primary,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.gray,
    light: colors.grayLight,
    dark: colors.dark,
    contrastText: colors.white,
  },
  background: {
    default: colors.bg,
    paper: colors.white,
    hover: `${colors.grayLight}44`,
    blueHover: `${colors.primary}80`,
    overlay: `${colors.dark}BF`,
  },
  text: {
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
  },
  success: {
    main: colors.success,
    light: `${colors.success}1A`,
    dark: colors.success,
    contrastText: colors.white,
  },
  error: {
    main: colors.error,
    light: `${colors.error}1A`,
    dark: colors.error,
    contrastText: colors.white,
  },
  divider: colors.grayLight,
  gray: {
    main: colors.gray,
    light: colors.grayLight,
    dark: colors.dark,
    contrastText: colors.white,
  },
  grayLight: {
    main: colors.grayLight,
    light: `${colors.grayLight}44`,
    dark: colors.gray,
    contrastText: colors.dark,
  },
  blueLight: {
    main: colors.blueLight,
    light: `${colors.blueLight}80`,
    dark: colors.primary,
    contrastText: colors.dark,
  },
  dark: {
    main: colors.dark,
    light: `${colors.dark}BF`,
    dark: '#000000',
    contrastText: colors.white,
  },
  white: {
    main: colors.white,
    light: colors.white,
    dark: colors.grayLight,
    contrastText: colors.dark,
  },
};
