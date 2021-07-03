import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query { #GET Method
    cars: [Car!]!
  }
  type Mutation { #PUT, POST, DELETE Methods
    createCar(name: String!, model: Int!, company: String!): Car!
  }
  type Car {
    id: ID!
    name: String!
    model: Int!
    company: String!
  }
`;
