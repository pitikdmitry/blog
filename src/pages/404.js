import PropTypes from "prop-types";
import React from "react";
import theme from "../theme/theme.yaml";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import { graphql } from 'gatsby'

const NotFoundPage = props => {

  return (
    <Article theme={theme}>
      <header>
        <Headline title="404" theme={theme} />
      </header>
      <p>Данная страница не существует, но вы можете найти много интересных статей здесь: <a href="https://backender.ru/" target="_self">много интересных статей</a></p>
    </Article>
  );
};

export default NotFoundPage;
