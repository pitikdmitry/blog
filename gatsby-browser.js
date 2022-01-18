/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"

import { GlobalStateBackend, GlobalStateMain } from "./src/components/GlobalState/GlobalState.js"

export const wrapRootElement = ({ element }) => {
    return (
        <GlobalStateMain>
          <GlobalStateBackend>
              {element}
          </GlobalStateBackend>
        </GlobalStateMain>
    )
}
