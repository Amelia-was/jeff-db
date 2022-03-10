// import gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    email: String
    papers: [Paper]
  }

  type Paper {
    _id: ID
    category: String
    title: String
    authors: String
    journal: String
    email: String
    abstract: String
    citation: String
    links: [Link]
    order: Number
  }

  type Link {
    _id: ID
    title: String
    url: String
  }

  type Query {
    papers: [Paper]
}
`;

// export the typeDefs
module.exports = typeDefs;