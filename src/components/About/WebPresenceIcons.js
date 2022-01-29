import React from "react"
import theme from "../../theme/theme.yaml";
import { FaGithub, FaStackOverflow, FaLinkedin, FaYoutube, FaYCombinator } from 'react-icons/fa'
import config from "../../../content/meta/config";
import Codeforces from "../../images/svg-icons/codeforces.svg";
import Unsplash from "../../images/svg-icons/unsplash.svg";

const WebPresenceIcons = () => {
    return (
        <div className="wrapper">
            <div className="icons">
              <a href={config.authorYoutube} target="_blank"><FaYoutube/></a>
              <a href={config.authorYoutube} target="_blank"><FaYoutube/></a>
              <a href={config.authorYoutube} target="_blank"><FaYoutube/></a>
            </div>
            <style jsx>{`
            .wrapper {
                text-align: center;
                &:before {
                  border-top: 1px solid #ecebea;
                  content: "";
                  height: 0;
                  position: absolute;
                  left: 50%;
                  transform: translateX(-50%);
                  bottom: 26px;
                  transition: all 0.5s;
                  width: 50%;
                }
                 &:after {
                  border-top: 1px solid #ecebea;
                  content: "";
                  height: 0;
                  position: absolute;
                  left: 50%;
                  transform: translateX(-50%);
                  top: 18px;
                  transition: all 0.5s;
                  width: 50%;
                }
            }
            .video-footer {
              font-size: 40px;
            }
            .icons {
                display: inline-block;
                font-size: 40px;
                :global(svg) {
                    margin: 10px;
                    fill: ${theme.color.brand.primary} !important;
                }
            }
            @from-width tablet {
                .icons {
                    font-size: 60px;
                }
            }
            @from-width desktop {
                .icons :global(a svg) {
                    margin-top: 20px;
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
