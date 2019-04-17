import React from "react"
import TopNavBar from '../components/TopNavBar'
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

const MainLayout = ({ children, SiderBarComponent }) => (
  <Layout style={{ minHeight: '800px' }}>
    <TopNavBar />
    <Layout>
      {!SiderBarComponent || SiderBarComponent}
      <Layout style={{ padding: '24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

export default MainLayout;