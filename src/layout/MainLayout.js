import React from "react"
import Header from '../components/Header'
import 'antd/dist/antd.css';

export default ({ children }) => (
  <div>
    <Header />
    <div style={{ margin: `1rem auto`, padding: `0 5rem` }}>
      {children}
    </div>
  </div>
)