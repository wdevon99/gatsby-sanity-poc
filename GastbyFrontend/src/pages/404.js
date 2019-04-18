import React from "react";
import { Link } from "gatsby"
import MainLayout from '../layout/MainLayout';


export default () => (
    <MainLayout>
        <h1>Page not found</h1>
        <Link to="/">Go back to home</Link> 
    </MainLayout>
);
