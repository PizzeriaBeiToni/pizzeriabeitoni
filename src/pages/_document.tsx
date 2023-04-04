import { Html, Head, Main, NextScript } from 'next/document'


// fonts imported from Google Fonts:
// "Cormorant Garamond"
// "Cormorant Upright"
// "Aboreto"

// noinspection JSUnusedGlobalSymbols
export default function Document() {
    return (
        <Html>

            <Head>
                <link rel="icon" href="/logo/favicon.png" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>

        </Html>
    )
}