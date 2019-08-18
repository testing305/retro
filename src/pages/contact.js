// import React from "react"
// import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import BackgroundSection from "../components/Globals/BackgroundSection"

// import ContactForm from "../components/Home/ContactForm"

// const ContactPage = ({ data }) => (
//   <Layout>
//     <SEO title="Contact" />
//     <BackgroundSection
//       img={data.img.childImageSharp.fluid}
//       styleClass="about-background"
//     />

//     <ContactForm />
//   </Layout>
// )

// export const query = graphql`
//   {
//     img: file(
//       relativePath: { eq: "homeGallery/chair-daytime-desk-840996.jpeg" }
//     ) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

// export default ContactPage
