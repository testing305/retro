import React, { Component } from "react"

import { FaUserTie, FaSign, FaMicrophoneAlt } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaUserTie />,
        title: "services 1",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        path: "/about",
      },
      {
        icon: <FaSign />,
        title: "services 2",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        path: "/about",
      },
      {
        icon: <FaMicrophoneAlt />,
        title: "services 3",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        path: "/about",
      },
    ],
  }
  render() {
    return (
      <section className="services">
        {/* <Title title="services" /> */}
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <AniLink
                  fade
                  to={item.path}
                  className="nav-link text-capitalize"
                >
                  {/* <Link to="/drinks/"> */}
                  <span>{item.icon}</span>
                </AniLink>
                <h5>{item.title}</h5>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
