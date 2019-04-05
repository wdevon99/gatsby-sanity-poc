import React from "react"
import Header from '../components/Header';
import { Menu, Icon, Layout } from 'antd';
import 'antd/dist/antd.css';

const { SubMenu, ItemGroup: MenuItemGroup } = Menu;
const { Content, Sider, } = Layout;

export default ({ children }) => (
  <Layout>
    <Header />
    <Layout style={{ padding: '24px 0', background: '#fff' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="rocket" /><span>Getting Started</span></span>}>
            <MenuItemGroup key="g1" title="Basics">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </MenuItemGroup>
          </SubMenu>

          <SubMenu key="sub2" title={<span><Icon type="video-camera" /><span>Tutorials</span></span>}>
            <MenuItemGroup key="g1" title="Basics">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </Sider>

      <Content style={{ padding: '0 110px', minHeight: 280 }}>
        {children}
      </Content>
    </Layout>
  </Layout>
)