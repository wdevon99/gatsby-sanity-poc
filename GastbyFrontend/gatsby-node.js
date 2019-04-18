const path = require('path');

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityTutorial {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const tutorials = result.data.allSanityTutorial.edges.map(({ node }) => node);

  tutorials.forEach(tutorial => {
    actions.createPage({
      path: tutorial.slug.current,
      component: path.resolve('./src/templates/tutorial.js'),
      context: {
        slug: tutorial.slug.current
      }
    });
  });
};
