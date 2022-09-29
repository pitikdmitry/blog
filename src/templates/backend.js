import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Article from "../components/Article";
import Page from "../components/Page";
import { ThemeContext } from "../layouts";
import View from "../components/Blog/View";
import RoadMapSvg from "../../content/pages/2--backend/roadmap.svg";

const Backend = props => {
  const page = props.data.page;
  const fil = props.data.file.name;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Page page={page} theme={theme} />
            <div className="road-map-svg">
              <RoadMapSvg />
            </div>
          </Article>
        )}

      </ThemeContext.Consumer>
      <Seo data={page} />

      {/* --- STYLES --- */}
      <style jsx>{`
        .road-map-svg {
          :global(a):hover {
            -webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
            filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
          }
        }
      `}</style>
    </React.Fragment>
    );
};

Backend.propTypes = {
  data: PropTypes.object.isRequired
};

export default Backend;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPathBackend($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      frontmatter {
        title
      }
    }
    file(name: { eq: "roadmap" }) {
      name
    }
  }
`;
