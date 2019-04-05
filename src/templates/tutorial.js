import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { PageHeader } from 'antd';
import WikiLayout from '../layout/WikiLayout'
import { navigateTo } from 'gatsby-link';

export const query = graphql`
  query($slug: String) {
    sanityTutorial(slug: { current: { eq: $slug } }) {
      title
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
      title={data.sanityTutorial.title}
    />
    <Image
      fluid={data.sanityTutorial.mainImage.asset.fluid}
      alt={data.sanityTutorial.title}
      style={{ width: 800 }}
    />
  </WikiLayout>
);
