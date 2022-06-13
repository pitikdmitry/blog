import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Item = props => {
  const { theme, index, item: { label, to, icon: Icon } = {}, onClick } = props;

  return (
    <React.Fragment>
      <li className={"hiddenItem" in props ? "hiddenItem" : "item"} key={label}>
        <Link
          to={to}
          className={"hiddenItem" in props ? "inHiddenItem" : `link-index-${index}`}
          onClick={onClick}
          data-slug={to}
        >
          {label}
        </Link>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        .item,
        .showItem {
          background: transparent;
          transition: all ${theme.time.duration.default};
          display: flex;
          align-items: center;
          position: relative;

          :global(a) {
            padding: ${theme.space.inset.s};
            display: flex;
            align-items: center;
          }

          :global(svg) {
            margin: 0 ${theme.space.inset.xs} 0 0;
            opacity: 0.3;
          }
        }

        :global(.itemList .hideItem) {
          display: none;
        }

        @from-width desktop {
          .item {
            margin-right: 20px;

            :global(a) {
              color: ${theme.text.color.primary};
              padding: ${theme.space.inset.s};
              transition: all 0s;
              border-radius: ${theme.size.radius.small};
            }

            :global(.homepage):not(.fixed) & :global(a) {
              color: ${theme.color.neutral.white};
            }

            :global(a:hover) {
              color: ${theme.color.brand.primary};
              background: color(white alpha(-60%));

              &::after {
                border-top: 1px solid ${theme.color.brand.primary};
                content: "";
                height: 0;
                position: absolute;
                width: 77%;
                bottom: 0;
              }
            }

            // Меню разных цветов
            :global(a.link-index-0:hover) {
              color: ${theme.color.green};
              background: color(white alpha(-60%));

              &::after {
                border-top: 1px solid ${theme.color.green};
                content: "";
                height: 0;
                position: absolute;
                width: 77%;
                bottom: 0;
              }
            }

            :global(a.link-index-1:hover) {
              color: ${theme.color.violet};
              background: color(white alpha(-60%));

              &::after {
                border-top: 1px solid ${theme.color.violet};
                content: "";
                height: 0;
                position: absolute;
                width: 77%;
                bottom: 0;
              }
            }

             :global(a.link-index-2:hover) {
              color: ${theme.color.red};
              background: color(white alpha(-60%));

              &::after {
                border-top: 1px solid ${theme.color.red};
                content: "";
                height: 0;
                position: absolute;
                width: 77%;
                bottom: 0;
              }
            }
               :global(a.link-index-3:hover) {
              color: ${theme.color.sea};
              background: color(white alpha(-60%));

              &::after {
                border-top: 1px solid ${theme.color.sea};
                content: "";
                height: 0;
                position: absolute;
                width: 77%;
                bottom: 0;
              }
            }
            // конец "Меню разных цветов"

            :global(svg) {
              transition: all 0s;
            }

            &:hover :global(svg) {
              fill: ${theme.color.brand.primary};
              opacity: 1;

              :global(.hero) & :global(svg) {
                fill: green;
              }
            }
          }

          .showItem {
            display: none;
          }

          .hiddenItem {
            text-align: left;
            padding: ${theme.space.xs};

            & :global(a.inHiddenItem) {
              color: ${theme.text.color.primary};
              &:hover {
                color: ${theme.color.brand.primary};
              }
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func,
  theme: PropTypes.object.isRequired
};

export default Item;
