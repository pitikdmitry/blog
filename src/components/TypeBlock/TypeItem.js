import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export const ETypeItemLabel = {
  FRONT: "front",
  BACK: "back"
}

const TypeItem = props => {
  const { theme, to, title, label, description, onClick } = props;

  return (
    <React.Fragment>
      <a to={to} className={`type-item item-label-${label}`} onClick={onClick}>
          <img className="type-item-image" src="http://localhost:8000/static/a56138e316008d9a3c0b31fb3a0f5729/2bfda/client-server.jpg" alt="" />
        <p className="type-item-title">{title}</p>
        <p className="type-item-description">{description}</p>
      </a>

      <style jsx>{`
        .type-item {
          cursor: pointer;
          text-decoration: none;
          padding: 15px;
          border-radius: ${theme.size.radius.default};
          box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);

          width: 46%;
          min-height: 250px;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition-duration: 0.3s;

          padding: ${`${theme.space.default}`};

          &:hover {
              transform: scale(1.07);
          }
        }

        .type-item-image {
          width: 100%;
          height: 200px;
          background-color: antiquewhite;
        }

        .type-item-title {
          font-size: 22px;
          line-height: 1.2;
          font-weight: 600;

        }

        .type-item-description {
          font-size: 13px;
        }

        .item-label-${ETypeItemLabel.FRONT} .type-item-title {
          color: ${theme.color.violet};
        }

        .item-label-${ETypeItemLabel.BACK} .type-item-title {
          color: ${theme.color.green};
        }
      `}</style>
    </React.Fragment>
  );
};

TypeItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  theme: PropTypes.object.isRequired
};

export default TypeItem;
