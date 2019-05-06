import React from "react"
import { Provider } from "react-redux"
import AuthProvider from "./src/providers/AuthProvider"
import createStore from "./src/redux/createStore.js"

export const wrapRootElement = ({ element }) => {
  const store = createStore();
  return <Provider store={store}><AuthProvider>{element}</AuthProvider></Provider>;
}