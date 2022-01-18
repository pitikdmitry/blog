import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Article from "../components/Article";
import Page from "../components/Page";
import { ThemeContext } from "../layouts";
import View from "../components/Blog/View";
import {Cursors, GlobalStateContextBackend, Items} from "../components/GlobalState/GlobalState.js";
import RoadMapSvg from "../../content/pages/2--backend/roadmap.svg";

const BackendPageTemplate = props => {
  const page = props.data.page;
  const fil = props.data.file.name;

  return (
    <GlobalStateContextBackend.Consumer>
      {g => (
        <React.Fragment>
          <ThemeContext.Consumer>
            {theme => (
              <Article theme={theme}>
                <Page page={page} theme={theme} />
                <RoadMapSvg />

                <View
                  globalState={g}
                  pageContext={props.pageContext}
                  theme={theme}
                />
              </Article>
            )}
          </ThemeContext.Consumer>
          <Seo data={page} />
        </React.Fragment>
      )}
    </GlobalStateContextBackend.Consumer>
  );
};

BackendPageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default BackendPageTemplate;

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
