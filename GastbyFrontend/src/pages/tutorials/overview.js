import React from "react";
import { Menu, Button } from 'antd';
import { Link, graphql, navigate } from "gatsby";
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
      SiderBarComponent={<DocsSideBar groupedTutorials={groupedTutorials} />}
    >
      <h1 style={{ fontSize: 36 }}>Tutorials</h1>
      {Object.entries(groupedTutorials).map(([key, tutorialsArr]) => (
        <div>
          <h1 style={{ fontSize: 20 }}>{tutorialsArr[0].tutorialCategory.title}</h1>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {tutorialsArr.map((tutorial) => (
            <Card
              key={tutorial.id}
              style={{ width: 230, margin: "10px 10px 30px 0px" }}
              cover={
                <Image
                  fluid={tutorial.mainImage.asset.fluid}
                  alt={tutorial.title}
                  style={{ height: 120 }}
                />
              }
            >
              <h1><Link to={tutorial.slug.current}>{tutorial.title}</Link></h1>
              <p>{tutorial.description.substring(0, 75)}...</p>
              <Button type="primary" onClick={() => { navigate(tutorial.slug.current)}}>View</Button>
            </Card>
          ))}
          </div>
        </div>
      ))}
    </MainLayout>
  )
};

const DocsSideBar = ({ groupedTutorials }) => {
  return (
    <SideNavBar>
      {Object.entries(groupedTutorials).map(([key, tutorialsArr]) => (
        <SubMenu key={key} title={<h1>{tutorialsArr[0].tutorialCategory.title}</h1>}>
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
