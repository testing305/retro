import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebookSquare className="icon facebook-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 2,
        icon: <FaInstagram className="icon twitter-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 3,
        icon: <FaTwitter className="icon instagram-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 4,
        icon: <FaLinkedin className="icon instagram-icon" />,
        path: `https://www.facebook.com`,
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="copyright">copyright &copy; 2019</div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 1rem 0;
  background: ${styles.colors.secondColor};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon {
    color: ${styles.colors.firstColor};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: white;
    }
  }

  .copyright {
    color: ${styles.colors.firstColor};
    text-transform: capitalize;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.1rem;
  }

  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
  }
`

// import React from "react"
// import NavbarIcons from "../Globals/NavbarIcons"

// export default function Footer() {
//   return (
//     <footer className="footer py-3">
//       <div className="container">
//         <div className="row">
//           <div className="col-10 mx-auto col-md-6 text-center text-capitalize">
//             <NavbarIcons />
//             <h5>
//               all right reserved &copy;{new Date().getFullYear().toString()}
//             </h5>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
