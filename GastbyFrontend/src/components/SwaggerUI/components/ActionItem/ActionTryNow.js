import React from 'react';
import { Button, Input } from 'antd';
import Util from '../../util';
import Constants from '../../constants';
import CodeBlock from './CodeBlock';

const { TextArea } = Input;

class ActionTryNow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            bodyParams: null,
            pathParams: null,
            apiRequestPending: false,
            apiResponse: null
        }
    }

    onTryNowClicked = () => {
        const { isClicked, bodyParams, pathParams } = this.state;
        const { authState, action, path } = this.props;
        if (!isClicked) {
            this.setState({ isClicked: true })
        } else {
            this.setState({ apiRequestPending: true })
            Util.performApiRequest(
                action,
                `${Constants.BASE_URL}${path}`,
                { body: bodyParams, path: pathParams },
                authState.user.access_token
            ).then((res) => {
                this.setState({ apiResponse: res, apiRequestPending: false });
                console.log(res);
            }).catch((err) => {
                this.setState({ apiResponse: err, apiRequestPending: false });
                console.log(err);
            });
        }
    }

    onParamTextChange = (event, parameter) => {
        const { bodyParams, pathParams } = this.state;
        if (parameter.in === 'body') {
            this.setState({ bodyParams: { ...bodyParams, [parameter.name]: event.target.value } })
        } else {
            this.setState({ pathParams: { ...pathParams, [parameter.name]: event.target.value } })
        }
    }

    renderParamInputItem = (parameter) => {
        if (parameter.in === 'path') {
            return (
                <Input
                    style={styles.inputStyle}
                    placeholder={parameter.name}
                    onChange={(event) => this.onParamTextChange(event, parameter)}
                />
            )
        } else {
            return (
                <TextArea
                    // value={JSON.stringify(Util.getFormatedSchemaProperties(Util.convertCircularJsonToJson(parameter.schema)))}
                    style={styles.inputStyle}
                    placeholder={parameter.name}
                    onChange={(event) => this.onParamTextChange(event, parameter)}
                />
            )
        }
    }

    renderApiResponse = () => {
        const { apiResponse } = this.state;
        if (apiResponse) {
            return (
                <div style={styles.responseContainer}>
                    <h4>Response:</h4>
                    <CodeBlock
                        code={apiResponse}
                    />
                </div>
            )
        }
        return null;
    }

    render() {
        const { isClicked, apiRequestPending } = this.state;
        const { data, path } = this.props;
        return (
            <div style={styles.container}>
                {!isClicked || (
                    <div>
                        <h4>Request Url: </h4>
                        <CodeBlock
                            code={`${Constants.BASE_URL}${path}`}
                        />
                        {data.parameters.length === 0 || data.parameters.map((parameter, index) => (
                            <div key={index}>
                                <p>{parameter.name} {!parameter.required || <span style={styles.redText}>(Required)</span>}</p>
                                {this.renderParamInputItem(parameter)}
                            </div>
                        ))}

                    </div>
                )}
                <Button type="primary" ghost onClick={this.onTryNowClicked} loading={apiRequestPending}>{isClicked ? "Go" : "Try Now"}</Button>
                {this.renderApiResponse()}
            </div>
        )
    }
}

const styles = {
    container: {
        marginTop: 20
    },
    redText: {
        color: 'red'
    },
    inputStyle: {
        width: 200,
        marginBottom: 15
    },
    responseContainer: {
        marginTop: 20
    },
}

export default ActionTryNow;