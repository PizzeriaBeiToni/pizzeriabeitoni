import '@/src/styles/globals.css'

import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/src/theme";
import {Analytics} from "@vercel/analytics/react";
import Head from "next/head";
import {Content, Context} from "@/src/styles/_app.styles";
import Navigation from "@/src/components/Navigation/Navigation";


// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Analytics mode="auto" />
            <CssBaseline />
            <Context>

                <Head>
                    <title>Pizzeria Bei Toni</title>
                    <link rel="icon" href="/img/favicon.png" />
                </Head>

                <Navigation />

                <Content id="content">
                    <Component {...pageProps} />
                </Content>

            </Context>
        </ThemeProvider>
    );
}
