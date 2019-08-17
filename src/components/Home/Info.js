import React from "react"
import { Link } from "gatsby"

export default function Info() {
  return (
    <section className="my-2 pb-5">
      <div className="container">
        {/* <Title title="about us" /> */}
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5 navbar-links">
              Choose the font families and colors that best suit your brand.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-color">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
