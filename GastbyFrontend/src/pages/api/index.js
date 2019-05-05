import React from "react";
import { withAuth } from '../../providers/AuthProvider';
import MainLayout from '../../layout/MainLayout';
import SwaggerUI from '../../components/SwaggerUI';
import workerSwagger from './swagger/worker.json';
//import allSwagger from './swagger/all.json';

class API extends React.Component {

    render() {
        const { authState } = this.props;
        return (
            <MainLayout>
                <SwaggerUI moduleTitle={'Worker'} swagger={workerSwagger} authState={authState}/>   
            </MainLayout>
        )
    }
};

export default withAuth(API);
 

