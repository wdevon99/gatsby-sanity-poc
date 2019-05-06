import React from 'react';
import { Tag } from 'antd';
import Util from '../../util';

const ActionHeader = ({ action,  path}) => {
    return (
        <div style={styles.container}>
            <Tag color={Util.getActionTagColor(action)} style={styles.actionTag}>{action.toUpperCase()}</Tag>
            <h3>{path}</h3>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    actionTag: {
        padding: "5px 10px 5px 10px",
        marginBottom: 5,
        fontWeight: 'bold'
    }
}

export default ActionHeader;