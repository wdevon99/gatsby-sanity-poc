import React from "react"
import { Menu, Layout } from 'antd';

const { Sider } = Layout;

const SideNavBar = ({ children }) => {
    return (
        <Sider width={300} style={{ background: '#fff' }}>
            <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}> 
                {children}
            </Menu>
        </Sider>
    );
}

export default SideNavBar;