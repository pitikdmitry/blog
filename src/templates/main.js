import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Article from "../components/Article";
import Page from "../components/Page";
import TypeBlock from "../components/TypeBlock";
import { ThemeContext } from "../layouts";

const Main = props => {
  const page = props.data.page;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Page page={page} theme={theme} />
            <TypeBlock theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo data={page} />
    </React.Fragment>
  );
};

Main.propTypes = {
  data: PropTypes.object.isRequired
};

export default Main;

//eslint-disable-next-line no-undef
export const pageQueryMain = graphql`
  query PageByPathMain($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
