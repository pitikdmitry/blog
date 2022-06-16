import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Article from "../components/Article";
import Page from "../components/Page";
import { ThemeContext } from "../layouts";
import View from "../components/Blog/View";
import RoadMapSvg from "../../content/pages/3--frontend/roadmap.svg";

const Frontend = props => {
  const page = props.data.page;
  const fil = props.data.file.name;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Page page={page} theme={theme} />
            {/*<RoadMapSvg />*/}
          </Article>
        )}
      </ThemeContext.Consumer>
      <Seo data={page} />
    </React.Fragment>
    );
};

Frontend.propTypes = {
  data: PropTypes.object.isRequired
};

export default Frontend;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPathFrontend($slug: String!) {
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
