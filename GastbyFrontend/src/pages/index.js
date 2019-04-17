import React from "react";
import MainLayout from '../layout/MainLayout';
import { withAuth } from '../providers/AuthProvider';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { authState } = this.props;
        return (
            <MainLayout>
                <h1 style={{ fontSize: 40, textAlign: 'center'}}>Hello Developer!</h1>
                {!authState.loggedIn || <h3 style={{ fontSize: 20, textAlign: 'center'}}>{authState.user.profile.email}</h3> }
            </MainLayout>
        );
    }
}

const LandingPageWithAuth = withAuth(LandingPage);

export default () => <LandingPageWithAuth />

