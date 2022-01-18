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
            </div>
            <style jsx>{`
            .wrapper {
                text-align: center;
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
                        margin-top: 0px;
                        margin-bottom: 20px;
                        fill: ${theme.color.brand.primaryDark} !important;
                    }
                }
            }
            `}</style>
        </div>
    );
};

export default WebPresenceIcons;
