import React, { Component } from 'react';
import { Card, Divider } from 'antd'
import Util from './util'
import ActionItem from './components/ActionItem'



export default class SwaggerUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            swagger: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const { swagger } = this.props;
            Util.expandSwaggerReferences(swagger).then((result) => {
                this.setState({ swagger: result, loading: false });
            }).catch((err) => err);
        }, 100);
    }

    renderActions = (path, actions) => {
        const { authState } = this.props;
        return (
            <div>
                {Object.entries(actions).map(([key, value], index) => (
                    <div key={index}>
                        <ActionItem
                            path={path}
                            action={key}
                            data={value}
                            getExpandedDefinition={this.getExpandedDefinition}
                            authState={authState}
                        />
                    </div>
                ))}
            </div>
        )
    }

    renderPaths = () => {
        const { paths } = this.state.swagger;
        return (
            <div>
                {Object.entries(paths).map(([key, value]) => (
                    <div key={key}>
                        {this.renderActions(key, value)}
                    </div>
                ))}
            </div>
        )
    };

    render() {
        const { moduleTitle } = this.props;
        const { swagger } = this.state;

        return (
            <div>
                {this.state.loading && !swagger ? (
                    <h1>Loading...</h1>
                ) : (
                        <Card>
                            <h1 style={styles.moduleTitle}>{moduleTitle} Module</h1>
                            <Divider />
                            {this.renderPaths()}
                        </Card>
                    )}
            </div>
        )
    }
}

const styles = {
    moduleTitle: {
        fontSize: 35,
        fontWeight: '300'
    }
}