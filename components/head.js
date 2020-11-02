import NextHead from "next/head";


const Head = ({
  title = "Akram Aznakour",
  description = "Hi, I'm Akram. Frontend developer and designer.",
  url = "https://akramaznakour.me",
  children,
}) => {
  return (
    <NextHead>
      {/* Preload font */}
      <link
        rel="preload"
        href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />


      {/* URL */}
      <meta name="og:url" content={url} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="Akram Aznakour" />
      <meta name="author" content="Akram Aznakour" />

      {/* Favicons */}
      <meta name="theme-color" content="#000000" />
      <link rel="icon"  href="./logo.svg" color="#000000" />

      {/* TheseMetrics */}
      <script async src="https://unpkg.com/thesemetrics@latest"></script>
    
      {children}
    </NextHead>
  );
};

export default Head;
