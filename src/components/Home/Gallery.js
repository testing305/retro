import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
import Img from "gatsby-image"
import { Link } from "gatsby"

const SINGLE_IMAGE = graphql`
  {
    img1: file(
      relativePath: { eq: "homeGallery/analysis-charts-coffee-1446319.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(
      relativePath: {
        eq: "homeGallery/adult-analyzing-brainstorming-1080865.jpeg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(
      relativePath: {
        eq: "homeGallery/adult-celebration-cheerful-1061583.jpeg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper className=" ">
              <div className="item item-1">
                <Link to="/food/">
                  <Img fluid={img1} />
                </Link>
                <p className="info">your image here</p>
              </div>
              <div className="item item-2">
                <Link to="/drinks/">
                  <Img fluid={img2} />
                </Link>
                <p className="info">your image here</p>
              </div>
              <div className="item item-3">
                <Link to="/transport/">
                  <Img fluid={img3} />
                </Link>
                <p className="info">your image here</p>
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
      "one one two two"
      "one one three three";

    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
