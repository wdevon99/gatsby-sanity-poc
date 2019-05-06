import React from "react";
import { Spin } from 'antd';
import { UserManager } from 'oidc-client';


export default class extends React.Component {

    componentDidMount() {
        var mgr = new UserManager();
        mgr.signinRedirectCallback().then(function (user) {
            window.history.replaceState({}, window.document.title, window.location.origin);
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user))
            setTimeout(() => {
               window.location = "/";
            }, 1000);
        }, function (error) {
            console.error(error);
        });
    }

    render() {
        return (
            <div 
                style={{
                    textAlign: "center",
                    marginTop: "100px"
                }}
            >
                <Spin size={"large"}/>
                <br/>
                <h1>Redirecting</h1>
                <p>Please wait..</p>
            </div>
        );
    }
}
