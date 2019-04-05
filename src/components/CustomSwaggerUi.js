import React from "react"
import { PageHeader } from 'antd';

const CustomSwaggerUi = ({ group, onBack }) => {
    console.log(group);
    return (
        <div>
            <PageHeader
                onBack={onBack}
                title={group.tag}
            />
        </div>
    )
}

export default CustomSwaggerUi;