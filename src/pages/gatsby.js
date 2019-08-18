// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import BackgroundSection from "../components/Globals/BackgroundSection"
// import GatsbyGallery from "../components/Home/GatsbyGallery"

// const GatsbyPage = ({ data }) => (
//   <Layout>
//     <SEO title="GatsbyJS" />
//     <BackgroundSection
//       img={data.img.childImageSharp.fluid}
//       styleClass="about-background"
//     />
//     {/* <Title title="our story" /> */}
//     {/* <InfoAbout /> */}
//     <GatsbyGallery />
//   </Layout>
// )

// export const query = graphql`
//   {
//     img: file(relativePath: { eq: "homeGallery/gatsby-hero-image-2.jpeg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

// export default GatsbyPage
