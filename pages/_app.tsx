import '~/styles/globals.css'
// import "~/styles/footer.scss";
// import "~/styles/about.scss";
// import "~/styles/aboutFeature.scss";
// import "~/styles/aboutUs.scss";
// import "~/styles/contact.scss";
// import "~/styles/contactUs.scss";
// import "~/styles/explore.scss";
// import "~/styles/new.scss";
// import "~/styles/rooms.scss";
// import "~/styles/room.scss";
// import "~/styles/slide.scss";
// import "~/styles/slider.scss";
// import "~/styles/navbar.scss";
// import "~/styles/singleRoom.scss";
// import "~/styles/tour.scss";
import { Jost } from 'next/font/google'
import Head from 'next/head'
import type { AppProps } from 'next/app'

const jostFont = Jost({
  display: 'swap',
  subsets: ['latin'],
  variable: '--jost-font',
})

import Header from '~/components/layout/Header'
import Navbar from '~/components/layout/Navbar'
import Footer from '~/components/layout/Footer'
import useTranslation from 'next-translate/useTranslation'

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('meta_description')} />
        <meta name="keywords" content={t('meta_keywords')} />
        <meta name="author" content={t('meta_author')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx global>{`
        :root {
          --jost-font: ${jostFont.style.fontFamily};
        }
      `}</style>
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
