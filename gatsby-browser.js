/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"

import { GlobalStateBackend, GlobalStateArticles } from "./src/components/GlobalState/GlobalState.js"

export const wrapRootElement = ({ element }) => {
    return (
        <GlobalStateArticles>
          <GlobalStateBackend>
              {element}
          </GlobalStateBackend>
        </GlobalStateArticles>
    )
}
