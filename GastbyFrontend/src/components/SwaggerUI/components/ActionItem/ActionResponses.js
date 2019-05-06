import React from 'react';
import { Tabs } from 'antd';
import Util from '../../util';
import CodeBlock from './CodeBlock';

const TabPane = Tabs.TabPane;

const ActionResponses = ({ data }) => {
    return (
        <div style={styles.container}>
            <h4>Responses:</h4>
            <Tabs type="card-container">
                {Object.entries(data.responses).map(([key, value]) => (
                    <TabPane tab={<span style={{...styles.statusCode, color: Util.getStatusCodeColor(key) }} color="green">{key}</span>} key={key}>
                        <CodeBlock
                            code={Util.getFormatedSchemaProperties(Util.convertCircularJsonToJson(value.schema))}
                        />
                    </TabPane>
                ))}

            </Tabs>



        </div>
    )
}

const styles = {
    statusCode: {   
        fontWeight: '600'
    }
}

export default ActionResponses;