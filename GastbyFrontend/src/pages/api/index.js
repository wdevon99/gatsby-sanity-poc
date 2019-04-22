import React from "react";
import { Menu, Icon } from 'antd';
import { Link, graphql } from "gatsby";
import _ from 'lodash';
import { Card } from 'antd';
import Image from 'gatsby-image';
import MainLayout from '../../layout/MainLayout';
import SideNavBar from '../../components/SideNavBar';
import { withAuth } from "../../providers/AuthProvider";
import 'es6-promise/lib/es6-promise/polyfill';
import fetch from 'isomorphic-fetch';
import './index.css';

const { SubMenu } = Menu;


class API extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        }
        this.setCompanies = this.setCompanies.bind(this);
    }

    setCompanies(res) {
        this.setState({ companies: [...res]});
      }

    componentDidMount() {
        console.log(this.props.authState)
        const context = this;
       if(this.props.authState.user) {
        fetch('https://devapi-unieconomy.azurewebsites.net/api/init/companies', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${this.props.authState.user.access_token}`,
                'Access-Control-Allow-Origin':'*'
            })
        })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            // console .log(response.json())
            return response.json();
        })
        .then(function(res) {
            console.log(res);
            context.setCompanies(res);
        });
        // https://devapi-unieconomy.azurewebsites.net/api/init/companies
       }
    }

    render() {
        return (
            <MainLayout
                // SiderBarComponent={<DocsSideBar groupedTutorials={[]}/>}
            >
                <h3>API</h3>
                <br />
                <h1>Company list</h1>
                <br />
                <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                    {this.state.companies.map(e => {
                        return (
                            <React.Fragment>
                            <div id={`${e.ID + 1}`} style={{ height: 500, backgroundColor: '#fafcef', width: 500, flexDirection: 'column'}}> 
                                <a href={`#${e.ID + 1}`}>{e.Name}</a>
                            </div>
                            <div id={`${e.ID + 2}`} style={{ height: 500, backgroundColor: '#fafcef', width: 500}}> 
                            <a href={`#${e.ID + 2}`}>{e.Name + ' ----- Tets 02'}</a>
                        </div>
                        <div id={`${e.ID + 3}`} style={{ height: 500, backgroundColor: '#fafcef', width: 500}}> 
                        <a href={`#${e.ID + 3}`}>{e.Name + ' ----- Tets 03'}</a>
                    </div>
                    </React.Fragment>
                        )
                    })}
                </div>
            </MainLayout>
        )
    }
  
};

export default  withAuth(API);

const DocsSideBar = ({ groupedTutorials }) => {  
  return (
    <SideNavBar>
        {Object.entries(groupedTutorials).map(([key, tutorialsArr]) => (
          <SubMenu key={key} title={<span><Icon type="arrow-right" />{tutorialsArr[0].tutorialCategory.title}</span>}>
            {tutorialsArr.map((tutorial) => (
              <Menu.Item>
                <Link to={tutorial.slug.current}>{tutorial.title}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
    </SideNavBar>
  );
};
