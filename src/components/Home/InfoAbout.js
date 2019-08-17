import React from "react"
import { Link } from "gatsby"

export default function InfoAbout() {
  return (
    <section className="my-2 pb-5">
      <div className="container">
        {/* <Title title="about us" /> */}
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5 navbar-links">
              Your story here...
            </p>
            <Link to="/contact/">
              <button className="btn text-uppercase btn-color">
                contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
