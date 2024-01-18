

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    <meta name="google-site-verification" content="qsi8k0I-otMOh5FASZcM5X9KLygQS5gqWtSD9H4Qnxc" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
