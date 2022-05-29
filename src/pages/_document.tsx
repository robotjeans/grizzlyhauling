import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="m-0 text-base text-black min-h-full bg-offwhite">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
