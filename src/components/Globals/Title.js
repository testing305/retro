import React from "react"

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mt-5 mb-2">
        <h1 className="display-4 text-capitalize font-weight-bold subtitle-color">
          {title}
        </h1>
      </div>
    </div>
  )
}
