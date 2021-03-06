import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
// import Info from "../components/Home/Info"
// import Services from "../components/Home/Services"
// import Gallery from "../components/Home/Gallery"
import ContactForm from "../components/Home/ContactForm"
// import Title from "../components/Globals/Title"
// import InfoIndex from "../components/Home/InfoIndex"
// import GatsbyGallery from "../components/Home/GatsbyGallery"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Hola" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      // title="retro mood"
      styleClass="default-background"
    />
    {/* <Title title="about us" /> */}
    {/* <InfoIndex />
    <GatsbyGallery />
    <Services />
    <Gallery /> */}

    <ContactForm />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "homeGallery/brickellBayHero.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
