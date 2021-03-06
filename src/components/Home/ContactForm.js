import React from "react"
import Title from "../Globals/Title"

export default function ContactForm() {
  return (
    <section className="contact-form pt-0 pb-3 px-auto text-dark mb-4">
      <Title title="contact" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <label className="invisible">
              <input name="bot-field" />
            </label>
            {/* {name} */}
            <div className="form-group ">
              <label htmlFor="name">Name</label>
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="your name here..."
              />
            </div>
            {/* {email} */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="your email here..."
              />
            </div>
            {/* {description} */}
            <div className="form-group">
              <label htmlFor="description">Messege</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="your messege here..."
              />
            </div>

            {/* {submit} */}
            <div data-netlify-recaptcha="true" />
            <button
              type="submit"
              className="btn submit btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
          <br />
          <br />
          <p className="dm">hola@ericpidal.com</p>
        </div>
      </div>
    </section>
  )
}
