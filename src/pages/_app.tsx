import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/src/theme";
import {Analytics} from "@vercel/analytics/react";
import {Content, Context} from "@/src/styles/_app.styles";
import Navigation from "@/src/components/Navigation/Navigation";


// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>

            <Analytics mode="auto" />

            <CssBaseline />

            <Context>

                <Navigation />

                <Content id="content">
                    <Component {...pageProps} />
                </Content>

            </Context>

        </ThemeProvider>
    );
}
