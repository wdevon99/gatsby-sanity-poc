import React, { Component } from "react"
import MainLayout from '../layout/MainLayout';
import swaggerJson from '../../static/swagger.json'
import CustomSwaggerUi from '../components/CustomSwaggerUi';
import { List, Button } from 'antd';
import _ from "lodash";


export default class ApiCustom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedGroup: null
        }
    }

    componentDidMount() {
        this.getGroupedPaths();
    }

    selectGroup = (group) => {
        console.log(group);
        this.setState({ selectedGroup: group });
    }

    getGroupedPaths = () => {
        const paths = Object.entries(swaggerJson.paths).map(([keyUrl, pathsObj]) => {
            return Object.entries(pathsObj).map(([key, path]) => ({ ...path, method: key, url: keyUrl }));
        });

        const tags = paths.map((pathArr) => pathArr[0] ? pathArr[0].tags[0] : null)
        const uniqueTags = _.uniq(tags);
        const groupedPaths = [];

        uniqueTags.forEach(tag => {
            let bucket = [];
            paths.forEach(path => {
                path.forEach(method => {
                    if (Array.isArray(method.tags)) {
                        if (method.tags.includes(tag)) {
                            bucket.push(path);
                        }
                    }
                })
            });
            groupedPaths.push({
                tag,
                group: bucket
            });
        });
        return groupedPaths;
    }

    render() {
        const group = this.getGroupedPaths();
        const { selectedGroup } = this.state;
        return (
            <MainLayout>
                {selectedGroup ? (
                    <CustomSwaggerUi group={selectedGroup} onBack={() => { this.setState({ selectedGroup: null }); }} />
                ) : (
                    <div>
                        <h1>API Custom: {swaggerJson.basePath}</h1>
                        <List
                            size="large"
                            bordered
                            dataSource={group}
                            renderItem={item => (
                                <List.Item>
                                    {item.tag ? item.tag : "NULL"}
                                    <Button
                                        type="dashed"
                                        style={{ float: "right" }}
                                        onClick={() => { this.selectGroup(item) }}
                                    >
                                        View
                        </Button>
                                </List.Item>
                            )}
                        />
                    </div>
                )}
            </MainLayout>
        )
    }
}
