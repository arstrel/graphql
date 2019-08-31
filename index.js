import express from 'express';
import schema from './schema';
import graphqlHTTP from 'express-graphql';


const app = express();

app.get('/', (req, res) => {
    res.send('Getting on graphQL')
});

const root = { hello: () => "Hi, I'm Artem" };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(8080, () => console.log('Running on port localhost:8080/graphql'))