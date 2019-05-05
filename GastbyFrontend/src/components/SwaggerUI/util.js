import RefParser from 'json-schema-ref-parser';
import CircularJSON from 'circular-json';
import axios from 'axios'

const expandSwaggerReferences = (swagger) => {
    return RefParser.dereference(swagger);
}

const getFormatedSchemaProperties = (schema) => {
    const result = {};
    if (schema.properties) {
        Object.entries(schema.properties).forEach(([key, value]) => {
            if (value.type !== 'object' && value.type !== 'array') {
                result[key] = value.type
            } else {
                if (value.type === 'object') {
                    result[key] = getFormatedSchemaProperties(value);
                }
                if (value.type === 'array') {
                    result[key] = [getFormatedSchemaProperties(value.items)]
                }
            }
        });
    }
    return result;
}

const convertCircularJsonToJson = (circularJson) => {
    return JSON.parse(CircularJSON.stringify(circularJson));
}

const getActionTagColor = (action) => {
    switch (action) {
        case 'get':
            return "#87d068"
        case 'post':
            return "#0c92b7"
        case 'put':
            return "#fccf19"
        case 'delete':
            return "#ff3700"
        default:
            return '#000';
    }
}

const getStatusCodeColor = (action) => {
    switch (action) {
        case '200':
            return "#0c92b7"
        case '201':
            return "#ff3700"
        default:
            return '#000';
    }
}

const performApiRequest = (type, url, params, acesstoken) => {
    return axios({
        method: type,
        url: url,
        headers: {
            'Authorization': `Bearer ${acesstoken}`,
            'Access-Control-Allow-Origin': '*'
        },
        responseType: 'application/json',
        params: params.path,
        data: params.body
    })
}

export default {
    expandSwaggerReferences,
    getFormatedSchemaProperties,
    convertCircularJsonToJson,
    getActionTagColor,
    getStatusCodeColor,
    performApiRequest
}