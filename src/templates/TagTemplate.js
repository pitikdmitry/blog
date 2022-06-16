import { FaTag } from "react-icons/fa/";
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import List from "../components/List";
import { pluralize } from "../utils/helpers";

const TagTemplate = props => {
  const {
    pageContext: { tag },
    data: {
      allMarkdownRemark: { totalCount, edges }
    }
  } = props;

  const isFrontTag = tag === "фронтенд";
  const postCount = pluralize(totalCount, ["пост", "поста", "постов"]);

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline theme={theme}>
                <span className={isFrontTag ? "tag front-tag" : "tag back-tag"}>{tag}</span>
              </Headline>
              <p className="meta">
                <strong>{postCount}</strong>:
              </p>
              <List edges={edges} theme={theme} />
            </header>
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo />

      {/* --- STYLES --- */}
      <style jsx>{`
        .tag {
          display: inline-block;
          border-radius: 3px;
          padding: 0 3px;
          color: #ffffff;
          letter-spacing: 1px;
          margin: 5px 10px 5px 0;
          text-transform: uppercase;
        }
        .back-tag {
          border: 2px #644DB3 solid;
          background: #644DB3;
        }
        .front-tag{
          border: 2px #00684A solid;
          background: #00684A;
        }
        `}</style>
    </React.Fragment>
  );
};

TagTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default TagTemplate;

// eslint-disable-next-line no-undef
export const tagQuery = graphql`
  query PostsByTag($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
