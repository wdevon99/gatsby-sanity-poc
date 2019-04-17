import React from 'react';
import AuthService from '../services/AuthService';

const AuthContext = React.createContext();

export default class AuthProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authService: new AuthService(),
            loggedIn: false, 
            userSigninFetching: true,
            userSigninError: '',
            user: null
        }   
    }

    componentDidMount() {
        this.processAuthState();
    }

    processAuthState = () => {
        this.setState({ userSigninFetching: true });

        const user = JSON.parse(localStorage.getItem('user'))
            
        if (!user) {
            this.setState({
                loggedIn: false,
                userSigninFetching: false,
                userSigninError: "Login Failed",
                user: null
            });
            return;
        } 

        this.setState({
            loggedIn: true,
            userSigninFetching: false,
            userSigninError: "Successfully Logged In",
            user: user
        });
    }

    render() {
        return (
            <AuthContext.Provider value={{ authState: this.state }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}


export const withAuth = (BaseComponent) => class AuthComponent extends React.Component {
    render() {
        return (
            <AuthContext.Consumer>
                {(context) =>  (
                    <BaseComponent
                        {...this.props}
                        authState={context.authState}
                    />
                )}
            </AuthContext.Consumer>
        )
    }
}
