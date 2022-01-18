import PropTypes from "prop-types";
import React from "react";
import Seo from "../components/Seo"
import View from "../components/Blog/View.js";
import { GlobalStateContextArticles } from "../components/GlobalState/GlobalState.js";
import { ThemeContext } from "../layouts";
import { graphql } from "gatsby";
import Article from "../components/Article";
import Page from "../components/Page";

/** Template for "home" page with infinite scroll and fallback to pagination. */
class IndexPage extends React.Component {

  render() {
    const page = this.props.data.page;

    return (
      <GlobalStateContextArticles.Consumer>
        {g => (
          <React.Fragment>
            <ThemeContext.Consumer>
              {theme => (
                <Article theme={theme}>
                  <Page page={page} theme={theme} />

                  <View
                    globalState={g}
                    pageContext={this.props.pageContext}
                    theme={theme}
                  />
                </Article>
              )}
            </ThemeContext.Consumer>
            <Seo data={page} />
          </React.Fragment>
        )}
      </GlobalStateContextArticles.Consumer>
    );
  }
}

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPathArticles($slug: String!) {
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
