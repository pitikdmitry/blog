import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import WebPresenceIcons from "../About/WebPresenceIcons";

const Footer = props => {
  const { theme } = props;
  const buildTime = useStaticQuery(query).site.buildTime

  return (
    <React.Fragment>
      <footer className="footer">
        <WebPresenceIcons />
      </footer>

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.color.neutral.white};
          padding: ${theme.space.inset.default};
          text-align: center;
          color: ${theme.color.neutral.gray.g};
          font-size: ${theme.font.size.xxs};
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60px;
          &::before {
            border-top: 1px solid ${theme.line.color};
            content: "";
            height: 0;
            position: absolute;
            bottom: ${`calc(${theme.space.default} * -1.5)`};
            left: 50%;
            transform: translateX(-50%);
            transition: all ${theme.time.duration.default};
            width: 50%;
            top: 18px;
          }

        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Footer;

const query = graphql`
  query Info {
    site {
      buildTime(formatString: "DD.MM.YYYY HH:mm")
    }
  }
`
