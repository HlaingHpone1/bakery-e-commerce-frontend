import { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        headerFooter: PaletteColor;
        tertiary: PaletteColor;
    }

    interface PaletteOptions {
        headerFooter?: PaletteColorOptions;
        tertiary?: PaletteColorOptions;
    }
}
