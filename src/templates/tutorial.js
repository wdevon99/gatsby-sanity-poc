import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

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
  <div>
    <Image
      fluid={data.sanityTutorial.mainImage.asset.fluid}
      alt={data.sanityTutorial.title}
    />
    <h1>{data.sanityTutorial.title}</h1>
    <Link to="/">Back to home</Link>
  </div>
);
