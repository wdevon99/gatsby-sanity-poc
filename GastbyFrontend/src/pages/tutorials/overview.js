import React from "react";
import { Menu, Icon } from 'antd';
import { Link, graphql } from "gatsby";
import _ from 'lodash';
import { Card } from 'antd';
import Image from 'gatsby-image';
import MainLayout from '../../layout/MainLayout';
import SideNavBar from '../../components/SideNavBar';


const { SubMenu } = Menu;

export const query = graphql`
  {
    allSanityTutorial {
      edges {
        node {
          id
          title
          description 
          slug {
            current
          }
          tutorialCategory {
            id
            title
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

export default ({ data }) => {
  const tutorials = data.allSanityTutorial.edges.map((tute) => tute.node);
  const groupedTutorials = _.groupBy(tutorials, (tute) => tute.tutorialCategory.id);  

  return (
    <MainLayout
        SiderBarComponent={<DocsSideBar groupedTutorials={groupedTutorials}/>}
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
)
};

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
