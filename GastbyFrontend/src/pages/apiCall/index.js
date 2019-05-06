import React from "react";
import { Button } from 'antd';
import 'es6-promise/lib/es6-promise/polyfill';
import MainLayout from '../../layout/MainLayout';
import { withAuth } from "../../providers/AuthProvider";
import fetch from 'isomorphic-fetch';
import './index.css';


class APICall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            companies: null,
            error: ''
        }
    }


    getCompanies = () => {
        this.setState({ loading: true });
        if (this.props.authState.user) {
            fetch('https://devapi-unieconomy.azurewebsites.net/api/init/companies', {
                method: 'get',
                headers: new Headers({
                    'Authorization': `Bearer ${this.props.authState.user.access_token}`,
                    'Access-Control-Allow-Origin': '*'
                })
            })
                .then((response) => {
                    if (response.status >= 400) {
                        this.setState({ error: 'Bad response from server!', loading: false });
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then((res) => {
                    console.log(res);
                    this.setState({ companies: [...res], loading: false });
                })
                .catch(e => {
                    this.setState({ error: 'Error!', loading: false });
                    console.log(e);
                });
        }
    }

    render() {
        return (
            <MainLayout>
                <h3>API</h3>
                <hr />
                <h1>Example API Call : Get Company list</h1>
                <Button onClick={this.getCompanies}>Get Company list</Button>
                <br />
                <br />
                {
                    this.state.loading || !this.state.companies ? "..." : (
                        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                            <h1>Companies:</h1>
                            {this.state.companies.map(e => {
                                return (
                                    <React.Fragment>
                                        <h3>- {e.Name}</h3>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    )
                }
                <h1>{this.state.error}</h1>
            </MainLayout>
        )
    }

};

export default withAuth(APICall);
