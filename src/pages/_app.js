import '@/styles/slick.min.css'
import '@/styles/slick-theme.min.css'
import '@/styles/globals.css'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout >
  )
}