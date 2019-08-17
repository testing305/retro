import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import InfoAbout from "../components/Home/InfoAbout"
import Title from "../components/Globals/Title"
import Gallery from "../components/Home/Gallery"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="about-background"
    />
    <Title title="our story" />
    <InfoAbout />
    <Gallery />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background-2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
