import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { ReactElement } from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        const jsxElement: any = <>{initialProps.styles}</>;
        return {
            ...initialProps,
            styles: jsxElement,
        };
    }

    render() {
        return (
            <Html>
                <Head>{CssBaseline.flush()}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
