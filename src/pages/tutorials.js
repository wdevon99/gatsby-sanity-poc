import React from "react";
import { Link, graphql } from "gatsby"
import { Card } from 'antd'
import WikiLayout from '../layout/WikiLayout';
import Image from 'gatsby-image';


export const query = graphql`
  {
    allSanityTutorial {
      edges {
        node {
          title
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
    <WikiLayout>
        <h1>Tutorials</h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>   
            {data.allSanityTutorial.edges.map(({ node: tutorial }) => (
                <Card
                    style={{ width: 300, margin: 10 }}
                    cover={
                        <Image
                            fluid={tutorial.mainImage.asset.fluid}
                            alt={tutorial.title}
                        />
                    }
                >
                    <h1><Link to={tutorial.slug.current}>{tutorial.title}</Link></h1>
                </Card>
            ))}
        </div>
    </WikiLayout>
);
