const fs = require('fs');
const path = require('path');
const { graphql } = require('graphql');
const { introspectionQuery, printSchema } = require('graphql/utilities');
const schema = require('../packages/aouf-api/src/schema');

const OUTPUT_PATHS = [path.join(__dirname, '../packages/aouf-web-app')];

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  let result;
  let errors;

  try {
    result = await graphql(schema, introspectionQuery);
  } catch (e) {
    errors = [e];
  }

  errors = errors || result.errors;

  if (errors) {
    // eslint-disable-next-line no-console
    console.error(
      '👎  ERROR introspecting schema: ',
      JSON.stringify(errors, null, 2),
    );
  } else {
    OUTPUT_PATHS.forEach(path => {
      fs.writeFileSync(`${path}/schema.graphql`, printSchema(schema));
      fs.writeFileSync(`${path}/schema.json`, JSON.stringify(result, null, 2));
    });

    // eslint-disable-next-line no-console
    console.error('👍  schema exported: ');
    process.exit(0);
  }
})();
