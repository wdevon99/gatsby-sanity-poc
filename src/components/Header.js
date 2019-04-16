import React from "react"
import { Link } from "gatsby"
import { Menu, Icon, Button,  } from 'antd';
import logo from '../../static/img/UniMicro.png';
import AuthService from '../services/AuthService';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authService: new AuthService()
        }
    }

    render() {
        const { authService } = this.state;
        return (
            <Menu
                mode="horizontal"
            >
                <Menu.Item key="logo" style={{ width: 150 }}>
                    <Link to='/'>
                        <img src={logo} alt="Logo" style={{ "width": '100%', "marginLeft": 0, "marginRight": 20, }} />
                    </Link>
                </Menu.Item>
                <Menu.Item key="wiki">
                    <Link to='/wiki'>
                        <Icon type="align-left" />Wiki
                    </Link>
                </Menu.Item>
                <Menu.Item key="apiSwagerUi">
                    <Link to='/api'>
                        <Icon type="code" />Api Swagger Ui
                    </Link>
                </Menu.Item>
                <Menu.Item key="apiCustom">
                    <Link to='/apiCustom'>
                        <Icon type="code" />Api Custom
                    </Link>
                </Menu.Item>
                <Menu.Item key="login" style={{ float: `right` }} >
                    <Button 
                        type="primary"
                        onClick={() => {
                            console.log("LOGIN")
                            authService.getUser().then((result) => {
                                console.log(result);
                            }).catch((err) => {
                                console.log(err);
                            });
                        }}
                    >
                        Login
                    </Button>
                </Menu.Item>
            </Menu>
        );
    }
}