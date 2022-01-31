import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FaArrowRight } from "react-icons/fa/";
import { FaArrowLeft } from "react-icons/fa/";
import { convertISODate, currDate } from "../../utils/helpers";

const NextPrev = props => {
  const {
    theme,
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {}
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {}
    } = {}
  } = props;

  const flexb = (nextSlug && prevSlug ? "50%" : "100%") /* If only one link available, it can take 100% of space. */

  if (!nextSlug && !prevSlug) return (<span></span>); /* If neither prev nor next is available, don't put weird empty space there. */

  const prevPrefixDate = prevPrefix || currDate() /* Intent: get date placeholder for viewing drafts. */
  const prevDateStr = convertISODate(prevPrefixDate)

  const nextPrefixDate = nextPrefix || currDate() /* Intent: get date placeholder for viewing drafts. */
  const nestDateStr = convertISODate(nextPrefixDate)

  return (
    <React.Fragment>
      <div className="links">
        {nextSlug && (
          <Link to={nextSlug}>
            <span className="next-link-text">
              <h4>
                {nextTitle} <time className="date">{nestDateStr}</time>
              </h4>
            </span>
            <span className="next-prev-arrow live-arrow">
              <span className="arrow-body">
                <span className="arrow-head next-arrow-head" />
              </span>
            </span>
          </Link>
        )}
        {prevSlug && (
          <Link to={prevSlug}>
            <span className="next-prev-arrow live-arrow">
              <span className="arrow-body">
                <span className="arrow-head prev-arrow-head" />
              </span>
            </span>
            <span className="prev-link-text">
              <h4>
                {prevTitle} <time className="date">{prevDateStr}</time>
              </h4>
            </span>
          </Link>
        )}
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .next-link-text {
          color: &color-brand-primary;
          width: 100%;
          text-align: right;
        }
        .prev-link-text {
          color: &color-brand-primary;
        }
        .next-prev-arrow {
          margin: 0 10px;
          display: flex;
          height: 100%;
          min-height: 16px;
          align-items: center;
          width: 32px;
          transition: width 300ms ease;
        }
        .next-prev-arrow:hover {
          width: 48px;
        }
        .arrow-body {
          display: flex;
          height: 2px;
          position: relative;
          background: ${theme.color.green};
          width: 100%;
          transition: width 300ms ease;
        }
        .arrow-head {
          border: 2px solid ${theme.color.green};
          border-radius: 2px;
          width: 12px;
          position: absolute;
          height: 12px;
          transform: rotate(-45deg);
          top: -5px;
        }
        .next-arrow-head {
          border-top: none;
          border-left: none;
          right: 0;
        }
        .prev-arrow-head {
          border-bottom: none;
          border-right: none;     
          left: 0;
        }
        .date {
          text-transform: lowercase;
        }
        .links {
          display: flex;
          flex-direction: column;
          padding: ${theme.space.l} 0;
          border-top: 1px solid ${theme.line.color};
          border-bottom: 1px solid ${theme.line.color};
          margin: ${theme.space.stack.l};
          margin-bottom: 0;

          :global(a) {
            display: flex;
          }

          :global(a:nth-child(2)) {
            margin: ${theme.space.default} 0 0;
          }

          :global(svg) {
            fill: ${theme.color.special.attention};
            width: ${theme.space.m};
            height: ${theme.space.m};
            flex-shrink: 0;
            flex-grow: 0;
            margin: ${theme.space.inline.m};
          }
        }

        h4 {
          font-weight: 500;
          margin: 0;
          font-size: 1.1em;
          color: ${theme.color.neutral.gray.new};
        }
        time {
          color: ${theme.color.neutral.gray.g};
          display: block;
          font-weight: 400;
          font-size: 0.8em;
          margin-top: 0.5em;
        }

        @from-width desktop {
          .prev-link-text {
            margin-right: 20px;
          }
          .next-link-text {
            margin-left: 20px;
          }
          .links {
            flex-direction: row-reverse;
            justify-content: center;

            :global(a) {
              flex-basis: ${flexb};
            }

            :global(a:nth-child(2)) {
              margin: 0;
            }
            :global(svg) {
              transition: all 0.5s;
              margin: ${theme.space.inline.s};
            }
          }

          @media (hover: hover) {
            .links :global(a:hover svg) {
              transform: scale(1.5);
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

NextPrev.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default NextPrev;
