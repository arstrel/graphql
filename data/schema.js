import { resolvers } from './data/resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        emails: String
        age: Int
        contacts: [Contact]
    }

    enum Gender {
        MALE
        FEMALE
        OTHER   
    }

    type Contact {
        firstName: String
        lastName: String
    }
    
    type Query {
        getFriend(id: ID): Friend
    }  
    
    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        language: String
        emails: String
        age: Int
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }
    
    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema