import React from "react"
import Title from "../Globals/Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(
      relativePath: {
        eq: "homeGallery/cellphone-coffee-colleagues-1391371.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const InfoIndex = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about us" styleClass={styles.aboutInfo} />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Our Founders</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            mollitia praesentium temporibus culpa consequuntur, quasi debitis
            sequi eaque quis vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            mollitia praesentium temporibus culpa consequuntur, quasi debitis
            sequi eaque quis vero.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default InfoIndex
