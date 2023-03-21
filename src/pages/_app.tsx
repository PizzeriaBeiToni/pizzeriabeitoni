import '@/src/styles/globals.css'

import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/src/theme";
import {Analytics} from "@vercel/analytics/react";


// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Analytics mode="auto" />
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
