import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../src/utils/"
import {
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebookSquare className="icon facebook-icon" />,
        path: "https://www.facebook.com",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://www.twitter.com",
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com",
      },

      {
        id: 4,
        icon: <FaLinkedin className="icon linkedin-icon" />,
        path: "https://www.linkedin.com/",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
    .facebook-icon {
    color: ${styles.colors.fifthColor};
    }
   
    /* .facebook-icon a:hover {
    color: ${styles.colors.fifthColor};
    transform: rotate(20deg) !important;
  } */
  
  .twitter-icon {
    color: ${styles.colors.sixthColor};;
  }
  
  .instagram-icon {
    color:  #e95950;
  }
  .linkedin-icon {
    color: ${styles.colors.fourthColor};
  }
  

  /* .icon:hover {
    color: ${styles.colors.mainGreen};
  } */

  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 8rem;
    justify-content: space-between;
    margin-right: 3rem;
    margin-left: 4rem;
    margin-bottom: 1.5rem;
    margin-top: 0.75rem;
  }
`
