import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { PageHeader } from 'antd';
import WikiLayout from '../layout/WikiLayout'
import { navigateTo } from 'gatsby-link';
import BlockContent from '@sanity/block-content-to-react';

export const query = graphql`
  query($slug: String) {
    sanityTutorial(slug: { current: { eq: $slug } }) {
      title,
      description,
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
  <WikiLayout>
    <PageHeader
      onBack={() => { navigateTo('tutorials')}}
      title={"Back"}
    />
    <h1>{data.sanityTutorial.title}</h1>
    <p>{data.sanityTutorial.description}</p>
    <Image
      fluid={data.sanityTutorial.mainImage.asset.fluid}
      alt={data.sanityTutorial.title}
      style={{ width: 800 }}
    />
    <BlockContent blocks={data.sanityTutorial.body}/>,
  </WikiLayout>
);
