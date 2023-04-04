import {createTheme, css} from "@mui/material";


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#702121'
        },
        background: {
            default: '#FFFBF5',
            paper: '#fff9f0'
        }
    },
    typography: {
        fontFamily: `"Cormorant Garamond", serif`
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: theme => css`
              ::selection {
                color: ${theme.palette.background.default};
                background: ${theme.palette.primary.main};
              }
              @font-face {
                font-family: "Cormorant Garamond";
                src:
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-Light.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-LightItalic.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-Medium.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-MediumItalic.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-Regular.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-Italic.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-SemiBold.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-SemiBoldItalic.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf") format("truetype"),
                    url("/fonts/Cormorant_Garamond/CormorantGaramond-BoldItalic.ttf") format("truetype");
              }
              @font-face {
                font-family: "Cormorant Upright";
                src:
                    url("/fonts/Cormorant_Upright/CormorantUpright-Light.ttf") format("truetype"),
                    url("/fonts/Cormorant_Upright/CormorantUpright-Medium.ttf") format("truetype"),
                    url("/fonts/Cormorant_Upright/CormorantUpright-Regular.ttf") format("truetype"),
                    url("/fonts/Cormorant_Upright/CormorantUpright-SemiBold.ttf") format("truetype"),
                    url("/fonts/Cormorant_Upright/CormorantUpright-Bold.ttf") format("truetype");
              }
              @font-face {
                font-family: "Aboreto";
                src: url("/fonts/Aboreto/Aboreto-Regular.ttf") format("truetype");
              }
            `
        }
    }
});