import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { PageHeader } from 'antd';
import MainLayout from '../layout/MainLayout'
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
  <MainLayout>
    <PageHeader
      onBack={() => { navigateTo('tutorials/overview')}}
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
  </MainLayout>
);