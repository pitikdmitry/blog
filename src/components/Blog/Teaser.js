import { FaArrowRight } from "react-icons/fa/";
import { FaCalendar } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";
import { FaUser } from "react-icons/fa/";
import Picture from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {convertISODate} from "../../utils/helpers";

const Teaser = props => {
  const {
    theme,
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        tags,
        author,
        cover: {
          children: [{ fluid }]
        }
      }
    },
    index
  } = props;
  let dateStr = convertISODate(prefix)

  return (
    <React.Fragment>
      <li>
        <Link to={slug} key={slug} className="link">
          <div className="gatsby-image-outer-wrapper">
            <Picture fluid={fluid} critical={index==5}/>
            <div className="tags-block">
              <p className="meta">
                {tags && tags.map((tag, index) => {
                  if (tag === "фронтенд") {
                    return (
                      <span className="tag tag-front" key={index}>
                    {tag}
                  </span>
                    )
                  }

                  return (
                    <span className="tag tag-back" key={index}>
                  {tag}
                </span>
                  )

                })
                }
              </p>
            </div>
          </div>
          <h1>{title}</h1>
          <p className="meta">
            <span>
               {dateStr}
            </span>
          </p>
          <p>{excerpt}</p>
        </Link>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        :global(.link) {
          width: 100%;
          color: ${theme.color.neutral.gray.new};
        }

        li {
          border: 1px solid transparent;
          border-radius: ${theme.size.radius.default};
          margin: ${`calc(${theme.space.default} * 2) 0 calc(${theme.space.default} * 3)`};
          padding: ${theme.space.inset.s};
          position: relative;
          transition: all ${theme.time.duration.default};
          background: ${theme.color.neutral.white};

          :global(.gatsby-image-outer-wrapper) {
            position: relative;
            overflow: hidden;
          }
          :global(.gatsby-image-outer-wrapper img) {
            z-index: -1;
          }
          :global(.tags-block) {
            position: absolute;
            bottom: 0;
          }

          &:not(:last-child):after {
            border-top: 1px solid ${theme.line.color};
            content: "";
            height: 0;
            position: absolute;
            bottom: ${`calc(${theme.space.default} * -1.5)`};
            left: 50%;
            transform: translateX(-50%);
            transition: all ${theme.time.duration.default};
            width: 50%;
          }

          &:last-child {
            margin-bottom: 10px;
          }
        }

        h1 {
          padding: ${theme.space.m} ${theme.space.s} 0;
          line-height: ${theme.blog.h1.lineHeight};
          font-size: ${theme.blog.h1.size};

          :global(.arrow) {
            display: none;
            position: relative;
            top: 7px;
          }
        }

        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.7em;
          padding: ${theme.space.m} ${theme.space.s};
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
            height: 14px;
            width: 14px;
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }

        .tag {
          border-radius: 3px;
          padding: 0 3px;
          color: ${theme.color.neutral.white};
          letter-spacing: 1px;
        }

        .tag-back {
          border: 2px ${theme.color.green} solid;
          background: ${theme.color.green};
        }

        .tag-front {
          border: 2px ${theme.color.violet} solid;
          background: ${theme.color.violet};
        }

        p {
          line-height: 1.5;
          padding: 0 ${theme.space.s};
          text-remove-gap: both;
        }

        @from-width tablet {
          li {
            margin: ${`calc(${theme.space.default} * 3) 0 calc(${theme.space.default} * 4)`};
            padding: ${theme.space.default};

            &::after {
              bottom: ${`calc(${theme.space.default} * -2)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -1.75)`};
              }
            }
          }

          h1 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
            padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
            transition: all 0.5s;
          }
          .meta {
            padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
          }
          p {
            padding: 0 ${theme.space.default};
          }
        }
        @below desktop {
          li {
            border: 1px solid ${theme.line.color};
            box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.03);
            margin-top: 20px;
            margin-bottom: 20px;

            &:first-child {
              margin-top: 0;
            }

            &::after {
              border-top: 0px;
            }
          }
        }
        @from-width desktop {
          li {
            margin: ${`calc(${theme.space.default}) 0 calc(${theme.space.default} * 5)`};
            padding: 0 0 ${`calc(${theme.space.default} * 2)`};
            max-width: 450px;

            &::after {
              bottom: ${`calc(${theme.space.default} * -1.5)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -2.75)`};
              }
            }
          }

          :global(.blogItemLink:first-child) > li::before {
            top: ${`calc(${theme.space.default} * -2.75)`};
          }
          h1 {
            font-size: 2em;
            padding: ${`calc(${theme.space.default} * 1.2) calc(${theme.space.default} * 2) 0`};
          }
          .meta {
            padding: ${`calc(${theme.space.default} * 0.5) calc(${theme.space.default} * 2)
              calc(${theme.space.default} * 0.5)`};
          }
          p {
            padding: ${`0 calc(${theme.space.default} * 2)`};
          }
          li {
            border-radius: ${theme.size.radius.small};
            box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);

            :global(.gatsby-image-wrapper) {
              transform: scale(1.0);
            }
            &:hover {
              border: 1px solid ${theme.line.color};
              box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);

              &:after {
                bottom: ${`calc(${theme.space.default} * -2.5)`};
              }
              :global(.gatsby-image-wrapper) {
                transform: scale(1.1);
              }
              h1 {
                opacity: 0.7;
              }
              :global(.arrow) {
                opacity: 1;
                stroke: ${theme.color.special.attention};
                transform: translateX(0);
              }
            }
            :global(.gatsby-image-wrapper) {
              transition: all ${theme.time.duration.default};
            }
            :global(.arrow) {
              display: inline-block;
              fill: ${theme.color.special.attention};
              stroke: ${theme.color.special.attention};
              stroke-width: 40;
              stroke-linecap: round;
              opacity: 0;
              transition: all 0.5s;
              transform: translateX(-50%);
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Teaser.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Teaser;
