import React from "react"
import theme from "../../theme/theme.yaml";
import { FaYoutube, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import config from "../../../content/meta/config";

const WebPresenceIcons = () => {
    return (
        <div className="wrapper">
            <div className="icons">
              <a href={config.authorYoutube} target="_blank"><FaYoutube/></a>
              <a href={config.authorTelegram} target="_blank" className="social-icon"><FaTelegramPlane/></a>
              {/*<a href={config.authorInstagram} target="_blank" className="social-icon"><FaInstagram/></a>*/}
            </div>
            <style jsx>{`
            .wrapper {
              text-align: center;
            }
            .icons {
              display: flex;
              align-items: center;
              font-size: 40px;
              :global(svg) {
                margin: 8px;
                fill: ${theme.color.neutral.gray.footer} !important;
              }
            }
            .social-icon {
              :global(svg) {
                width: 30px;
                height: 30px;
              }
            }
            @from-width tablet {
              .icons {
                font-size: 40px;
              }
            }
            @from-width desktop {
                .icons :global(a svg) {
                    transition: 500ms;
                }
                @media (hover: hover) {
                    .icons :global(a:hover svg) {
                      opacity: 0.7;
                    }
                }
            }
            `}</style>
        </div>
    );
};

export default WebPresenceIcons;
