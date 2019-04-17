import React from "react";
import { Menu, Icon } from 'antd';
import MainLayout from '../../layout/MainLayout';
import SideNavBar from '../../components/SideNavBar';

const { SubMenu } = Menu;

const DocsSideBar = () => (
    <SideNavBar>
        <SubMenu key="sub1" title={<span><Icon type="rocket" />Getting Started</span>}>
            <Menu.Item key="1">ONE</Menu.Item>
        </SubMenu>
    </SideNavBar>
);

export default () => (
    <MainLayout
        SiderBarComponent={<DocsSideBar />}
    >
        <h1>DOCS</h1>
    </MainLayout>
);
