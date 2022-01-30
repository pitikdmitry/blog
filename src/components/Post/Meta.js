import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {currDate, convertMonth, convertISODate} from "../../utils/helpers";
import { FaUser, FaTag, FaCalendar } from "react-icons/fa/";
import moment from "moment";

const Meta = props => {
  const { author: authorName, tags, theme, lastEdit } = props;
  const prefixDate = props.prefix || currDate() /* Intent: get date placeholder for viewing drafts. */
  let dateStr = convertISODate(prefixDate)
  //TODO: lastEdit

  return (
      <div className="tags-block">
        <p className="date">
          {dateStr}
        </p>
        <p className="delimiter">|</p>
        <p className="meta">
          {tags && tags.map((tag, index) => {
            if (tag === "фронтенд") {
              return (
                <span className="tag tag-front" key={index}>
                   <Link to={`/tag/${tag.split(" ").join("-")}`}>
                    <span>{tag}</span>
                   </Link>
                  </span>
              )
            }

            return (
              <span className="tag tag-back" key={index}>
                 <Link to={`/tag/${tag.split(" ").join("-")}`}>
                  <span>
                    {tag}
                  </span>
                </Link>
              </span>
            )

          })
          }
        </p>

      {/* --- STYLES --- */}
      <style jsx>{`
        .meta {
          position: relative;
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;
          color: ${theme.color.neutral.gray.j};

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: 0 ${theme.space.xs};
          }
        }
        .delimiter {
          margin: 0 10px;
        }
        .tags-block {
          display: flex;
          align-items: center;
         }
        .tag {
          border-radius: 3px;
          padding: 0 3px;
          color: ${theme.color.neutral.white};
          letter-spacing: 1px;
          margin: 5px 10px 5px 0;
          text-transform: uppercase;
        }
        .tag span {
          color: ${theme.color.neutral.white};
        }
        .tag-back {
          border: 2px ${theme.color.green} solid;
          background: ${theme.color.green};
        }
        .tag-front {
          border: 2px ${theme.color.violet} solid;
          background: ${theme.color.violet};
        }
        .date {
          text-transform: lowercase;
        }
        @from-width tablet {
          .meta {
            margin: ${`${theme.space.m} 0 ${theme.space.m}`};
          }
        }
        @media (hover: hover) {
          .meta {
            :global(a svg) {
              transition: all 0.5s ease-in-out;
              -webkit-transition: all 0.5s ease-in-out;
              -moz-transition: all 0.5s ease-in-out;
            }
            :global(a:hover svg) {
              transition: all 0.5s ease-in-out;
              -webkit-transition: all 0.5s ease-in-out;
              -moz-transition: all 0.5s ease-in-out;
              transform: scale(1.3);
              color: ${theme.color.brand.primary};
            }
          }
        }
      `}</style>
    </div>
  );
};

Meta.propTypes = {
  tags: PropTypes.array,
  theme: PropTypes.object.isRequired
};

export default Meta;
