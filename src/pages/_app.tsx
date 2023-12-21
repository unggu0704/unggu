import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "김규형 | Wep/App Dev",
  description: "안녕하세요, 개발자 김규형입니다.",
  canonical: "https://unggu.vercel.app",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://unggu.vercel.app",
    title: "김규형",
    site_name: "김규형 | 포트폴리오",
    images: [
      {
        url: "/share.png",
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
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "홍길동 | Front-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "홍길동 | Front-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
