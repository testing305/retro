import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
import Img from "gatsby-image"

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/gatsby-one-pager.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(
      relativePath: {
        eq: "homeGallery/adult-analyzing-brainstorming-1080865.jpeg"
      }
    ) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 70 }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/gatsby-camera.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img4: file(
      relativePath: { eq: "homeGallery/adult-art-backlight-1771298.jpg" }
    ) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f00e2e", shadow: "#192550" }
          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img5: file(
      relativePath: { eq: "homeGallery/adult-art-backlight-1771298.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img6: file(relativePath: { eq: "homeGallery/page-speed-insights3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function GatsbyGallery() {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        const img4 = data.img4.childImageSharp.fluid
        const img5 = data.img5.childImageSharp.fluid
        const img6 = data.img6.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper className=" ">
              <div className="item item-1">
                <a
                  href="https://www.gatsbyjs.org/gatsby-one-pager.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={img1} />
                </a>
                <p className="info">made with GatsbyJS</p>
              </div>
              <div className="item item-2">
                <a
                  href="https://using-gatsby-image.gatsbyjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={img2} />
                </a>
                <p className="info">gatsby image optimization</p>
              </div>
              <div className="item item-3">
                <a
                  href="https://image-processing.gatsbyjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={img3} />
                </a>
                <p className="info">gatsby transformer sharp</p>
              </div>
              <div className="item item-4">
                <a
                  href="https://www.gatsbyjs.org/docs/using-gatsby-image/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={img4} />
                </a>
                <p className="info">
                  built in duatone color gradients on the fly!
                </p>
              </div>
              <div className="item item-5">
                <a
                  href="https://www.gatsbyjs.org/docs/using-gatsby-image/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={img5} />
                </a>
                <p className="info">original image</p>
              </div>
              <div className="item item-6">
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ftemplate.ericpidal.com%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={img6} />
                </a>
                <p className="info">ultra fast page loads!</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;

  .item {
    position: relative;
    border: 1px solid black;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: #222680;
    color: white;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one  two two"
      "one one  three three"
      "four four five five"
      "six six six six";

    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
    .item-4 {
      grid-area: four;
    }
    .item-5 {
      grid-area: five;
    }
    .item-6 {
      grid-area: six;
    }
  }
`
