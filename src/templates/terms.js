import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Page from "../components/Page";
import TypeBlock from "../components/TypeBlock";

const Terms = props => {
  const page = props.data.page;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Page page={page} theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo data={page} />
    </React.Fragment>
  );
};

Terms.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Terms;

// eslint-disable-next-line no-undef
export const pageQueryTerms = graphql`
  query PageByPathTerms($slug: String!) {
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
