import * as React from 'react';
// next
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document';
import { AppType } from 'next/app';
// emotion
import createEmotionServer from '@emotion/server/create-instance';
// utils
import createEmotionCache from 'src/utils/createEmotionCache';
// theme
import palette from 'src/theme/palette';
import { primaryFont } from 'src/theme/typography';
//
import { MyAppProps } from './_app';

// ----------------------------------------------------------------------

const Favicon = () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
  </>
);

const Meta = () => (
  <>
    {/* PWA primary color */}
    <meta name="theme-color" content={palette('light').primary.main} />
    <meta
      name="description"
      content="The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components."
    />
    <meta name="keywords" content="react,material,kit,application,landing & corporate,template" />
    <meta name="author" content="ZONE UI Kit" />
  </>
);

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="en" className={primaryFont.className}>
      <Head>
        <Favicon />
        <Meta />
        {/* Emotion */}
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
