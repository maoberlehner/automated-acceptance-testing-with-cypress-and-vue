const merge = require(`webpack-merge`);
const prodEnv = require(`./prod.env`);

module.exports = merge(prodEnv, {
  API_URI: `"http://localhost:3000/graphql"`,
  NODE_ENV: `"development"`,
});
