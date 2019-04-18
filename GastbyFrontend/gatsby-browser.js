import React from "react"
import AuthProvider from "./src/providers/AuthProvider"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)