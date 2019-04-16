import React, { Component } from "react"
import MainLayout from '../layout/MainLayout';
import swaggerJson from '../../static/swagger.json'
import SwaggerUI from "swagger-ui";
import 'swagger-ui-themes/themes/3.x/theme-feeling-blue.css'

export default class Api extends Component {

    componentDidMount() {
        SwaggerUI({
            dom_id: "#ui",
            url: "https://s3.ap-south-1.amazonaws.com/bonfire-app-assets/public/swaggerSmall.json"
        })
    }

    render() {
        return (
            <MainLayout>
                <h1>API Swagger UI: {swaggerJson.basePath}</h1>
                <div id="ui" />
            </MainLayout>
        )
    }
}