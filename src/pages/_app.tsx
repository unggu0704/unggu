import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { DefaultSeo, ArticleJsonLd } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

import * as gtag from "../lib/gtag";

const DEFAULT_SEO = {
  title: "김규형 | Dev",
  description: "김규형 | 안녕하세요, 개발자 김규형입니다.",
  canonical: "https://unggu.vercel.app",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://unggu.vercel.app",
    title: "김규형",
    site_name: "김규형 | 포트폴리오",
    images: [
      {
        url: "/share.jpg",
        width: 285,
        height: 167,
        alt: "김규형 이미지 alt",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "preload",
      href: "/fonts/custom-font.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "김규형 | Web/Mobile Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "김규형 | UNGGU | Web/Mobile Dev",
    },
    {
      name: "author",
      content: "김규형",
    },
    {
      name: "keywords",
      content: "김규형, 개발자, 웹 개발, 모바일 개발, 포트폴리오",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <DefaultSeo {...DEFAULT_SEO} />
      
      <ArticleJsonLd
        type="BlogPosting"
        url="https://unggu.vercel.app"
        title="김규형 | Dev"
        images={[
          "https://unggu.vercel.app/share.jpg",
        ]}
        authorName="김규형"
        publisherName="김규형"
        description="김규형 | 안녕하세요, 개발자 김규형입니다." datePublished={""}      />

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
