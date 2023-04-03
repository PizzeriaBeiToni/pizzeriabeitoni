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
                <link rel="icon" href="/img/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Aboreto&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cormorant+Upright:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>

        </Html>
    )
}