import React from "react"
import { Link } from "gatsby"
import { Menu, Icon, Button, Layout, Avatar } from 'antd';
import { withAuth } from '../providers/AuthProvider';
import logo from '../../static/img/UniMicroWhite.png';

const TopNavBar = ({ authState }) => {
    return (
        <Layout.Header className="header">
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="logo" style={{ width: 150 }}>
                    <Link to='/'>
                        <img src={logo} alt="Logo" style={{ "width": '100%', "marginLeft": 0, "marginRight": 20, }} />
                    </Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to='/docs/overview'>
                        <Icon type="align-left" />Docs
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/tutorials/overview'>
                        <Icon type="align-left" />Tutorials
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/apiCall'>
                        <Icon type="align-left" />Api Call
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to='/api'>
                        <Icon type="align-left" />Api
                    </Link>
                </Menu.Item>
                <div style={{ float: 'right' }} >
                    {authState.loggedIn ? (
                        <div>
                            {authState.user.profile.email}
                            <Avatar style={{ backgroundColor: '#489ace', verticalAlign: 'middle', margin: 10 }} size="large">{authState.user.profile.email[0]}</Avatar>
                            <Button type="secondary" onClick={() => { authState.authService.logout() }}>Logout</Button>
                        </div>
                    ) : (
                            <Button type="primary" onClick={() => { authState.authService.login() }}>Login</Button>
                        )}
                </div>
            </Menu>
        </Layout.Header>
    );
}

export default withAuth(TopNavBar);