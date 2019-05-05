import React from 'react';
import { Timeline } from 'antd';

const ActionDetails = ({ data}) => {
    return (
        <div style={styles.container}>
            <h4>Description:</h4>
            <p>{data.description}</p>

            <h4>Parameters:</h4>
            {data.parameters.length === 0 ? (<span>No parameters</span>) : (
                <div style={styles.paramsContainer}>
                    <Timeline>
                        {data.parameters.map((parameter, index) => (
                            <Timeline.Item color="#3f3f3f" key={index}>
                                <span>{parameter.name} {!parameter.required || <span style={styles.redText}>(Required)</span>}</span>
                                <p style={styles.smallText}>{parameter.in} | {parameter.type}</p>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </div>
            )}
        </div>
    )
}

const styles = {
    container: {
        marginTop: 20
    },
    paramsContainer: {
        marginTop: 20
    },
    redText: {
        color: 'red'
    },
    smallText: {
        fontSize: 11,
        color: '#3f3f3f'
    }
}

export default ActionDetails;