import React from "react";
import PropTypes from "prop-types";

import TypeItem, { ETypeItemLabel } from "./TypeItem";

const TypeBlock = props => {
  const { theme } = props;

  const items = [
    {
      title: "Бекенд",
      description: "все то, что происходит на сервере",
      label: ETypeItemLabel.BACK,
    },
    {
      title: "Фронтенд",
      description: "а это видит пользователь",
      label: ETypeItemLabel.FRONT,
    }
  ];

  return (
    <React.Fragment>
      <div className="type-block">
        {items.map((item, index) => (
          <TypeItem key={index} theme={theme} {...item} />
        ))}
      </div>

      <style jsx>{`
        .type-block {
          display: flex;
          justify-content: space-between;
          padding-bottom: 100px;
        }
      `}</style>
    </React.Fragment>
  );
};

TypeBlock.propTypes = {
  theme: PropTypes.object.isRequired
};

export default TypeBlock;
