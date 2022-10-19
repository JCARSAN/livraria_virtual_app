import Document, { Html, Head, NextScript, Main } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=IBM+Plex+Serif&family=Playfair+Display:wght@500&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}