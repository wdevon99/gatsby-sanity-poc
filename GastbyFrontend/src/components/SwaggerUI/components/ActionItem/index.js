import React from 'react';
import { Col, Row, Divider } from 'antd';
import ActionHeader from './ActionHeader';
import ActionDetails from './ActionDetails';
import ActionTryNow from './ActionTryNow';
import ActionResponses from './ActionResponses';

export default class ActionItem extends React.Component {
    render() {
        const { path, action, data, authState } = this.props;
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <ActionHeader
                            action={action}
                            path={path}
                        />
                        <ActionDetails
                            data={data}
                        />
                        <ActionTryNow
                            data={data}
                            authState={authState}
                            action={action}
                            path={path}
                        />
                    </Col>
                    <Col span={10}>
                        <ActionResponses
                            data={data}
                        />
                    </Col>
                </Row>
                <Divider />
            </div>
        )
    }
}