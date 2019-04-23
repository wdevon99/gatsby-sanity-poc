import React from "react";
import MainLayout from '../layout/MainLayout';
import { UserManager } from 'oidc-client';


export default class extends React.Component {

    componentDidMount() {
        var mgr = new UserManager();
        mgr.signinSilentCallback().catch(function (error) {
            console.error(error);
        });
    }

    render() {
        return (
            <MainLayout>
                <h1>processing...</h1>
            </MainLayout>
        );
    }
}
