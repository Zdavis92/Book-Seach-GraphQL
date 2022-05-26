const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        title: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
    }
    
    input BookInfo {
        authors: [String]
        description: String
        bookId: String
        image: String
        title: String
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInfo): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;