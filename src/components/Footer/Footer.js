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
        <span className="footer-text">&copy;
          {new Date().getFullYear()} Размещение материалов с данного сайта на других платформах запрещено</span>
        <WebPresenceIcons />
      </footer>

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.color.neutral.dark};
          opacity: 0.9;
          padding: ${theme.space.inset.default} ${theme.space.inset.xl};
          text-align: center;
          color: ${theme.color.neutral.gray.footer};
          font-size: ${theme.font.size.xxs};
          width: 100%;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
