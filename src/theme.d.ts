import { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material" {
  interface Palette {
    tertiary: PaletteColor;
    optional: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    optional?: PaletteColorOptions;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
