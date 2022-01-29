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
          background: ${theme.color.neutral.common};
          padding: ${theme.space.inset.default};
          text-align: center;
          color: ${theme.color.neutral.gray.g};
          font-size: ${theme.font.size.xxs};
          width: 100%;
          position: relative;
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
