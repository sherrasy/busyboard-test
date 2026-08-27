// types/mui-extended.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    hover: string;
    blueHover: string;
    overlay: string;
  }

  interface Palette {
    gray: Palette['primary'];
    grayLight: Palette['primary'];
    blueLight: Palette['primary'];
    dark: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
    grayLight?: PaletteOptions['primary'];
    blueLight?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
    grayLight: true;
    blueLight: true;
    dark: true;
    white: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primaryCustom: true;
    outlinedCustom: true;
  }
}
