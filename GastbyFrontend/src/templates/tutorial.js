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
      title
      description
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      body {
        _key
        _type
        style
        list
        children {
          _key
          _type
          text
        }
      }
    }
  }
`;

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default ({ data }) => {
  //data.sanityTutorial.body[0].markDefs = [];
  return (
    <MainLayout>
      <PageHeader
        onBack={() => { navigateTo('tutorials/overview') }}
        title={"All Tutorials"}
      />

      <div style={{ margin: 20 }}>
        <h1>{data.sanityTutorial.title}</h1>
        <Image
          fluid={data.sanityTutorial.mainImage.asset.fluid}
          alt={data.sanityTutorial.title}
          style={{ width: 400, margin: "10px 0px 20px 0px" }}
        />
        <p>{data.sanityTutorial.description}</p>
        <hr style={{ margin: "30px 0px 30px 0px" }} />
        {console.log(data.sanityTutorial.body)}
        <BlockContent
          blocks={data.sanityTutorial.body}
          serializers={serializers}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          projectId="vi3cop8z"
          dataset="production"
        />
      </div>
    </MainLayout>
  )
};