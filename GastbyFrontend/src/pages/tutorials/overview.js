import React from "react";
import { Menu, Icon } from 'antd';
import { Link, graphql } from "gatsby"
import { Card } from 'antd'
import Image from 'gatsby-image';
import MainLayout from '../../layout/MainLayout';
import SideNavBar from '../../components/SideNavBar';


const { SubMenu } = Menu;

export const query = graphql`
  {
    allSanityTutorial {
      edges {
        node {
          title
          description 
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
    <MainLayout
        SiderBarComponent={<DocsSideBar tutorials={data.allSanityTutorial.edges}/>}
    >
        <h1>Tutorials</h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {data.allSanityTutorial.edges.map(({ node: tutorial }, index) => (
                <Card
                    key={index}
                    style={{ width: 300, margin: 10 }}
                    cover={
                        <Image
                            fluid={tutorial.mainImage.asset.fluid}
                            alt={tutorial.title}
                        />
                    }
                >
                    <h1><Link to={tutorial.slug.current}>{tutorial.title}</Link></h1>
                    <p>{tutorial.description}</p>
                </Card>
            ))}
        </div>
    </MainLayout>
);

const DocsSideBar = ({ tutorials }) => (
    <SideNavBar>
        <SubMenu key="sub1" title={<span><Icon type="rocket" />Using the API</span>}>
            <Menu.Item key="1">ONE</Menu.Item>
        </SubMenu>
    </SideNavBar>
);
