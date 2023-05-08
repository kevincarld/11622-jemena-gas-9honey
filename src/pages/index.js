
import Layout from "components/util/Layout"
//
import Hero from "components/Hero"
import Intro from "components/Intro"
import MakeGood from "components/MakeGood"
import Sink from "components/Sink"
import Banner from "components/Banner"
import Tabs from "components/Tabs"
import Footer from "components/Footer"


export default function Home() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <MakeGood />
      <Sink />
      <Banner />
      <Tabs />
      <Footer />
    </Layout>
  )
}
