const express = require('express');
//compatibility layer between express and graphql
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
const app = express();
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);
app.listen(4000, () => {
	console.log('Listening');
});
