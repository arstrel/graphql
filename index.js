import express from 'express';
import {schema} from './data/resolvers';
import graphqlHTTP from 'express-graphql';


const app = express();

app.get('/', (req, res) => {
    res.send('Getting on graphQL')
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));


app.listen(8080, () => console.log('Running on port localhost:8080/graphql'))