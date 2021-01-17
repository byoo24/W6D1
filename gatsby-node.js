const path = require('path');


// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  
    // https://levelup.gitconnected.com/how-to-set-up-import-aliases-for-gatsby-32398ae67e7f
    actions.setWebpackConfig({
        resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@images': path.resolve(__dirname, 'src/images'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@templates': path.resolve(__dirname, 'src/templates'),
        },
        },
    });
};