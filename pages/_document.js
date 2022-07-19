import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
}

    render() {
        return (
            <Html lang='tr-TR'>
                <Head/>
                <body>
                    <Main />
                    <NextScript />
                    <div id='notifications'></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument;