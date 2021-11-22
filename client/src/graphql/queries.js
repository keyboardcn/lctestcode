import { 
    gql,
    ApolloClient,
    InMemoryCache,
  } from '@apollo/client';

// apollo client setup, connect
export const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
});
  
export const getUsersQuery = gql`
{
    users{
        id
        name
        email
        quotes{
            id
            name
            price
        }
    }
}
`;

export const getQuotesQuery = gql`
{
    quotes{
        id
        name
        description
        price
        user {
            name
            email
        }
    }
}
`;

// query variable: string not null
export const addQuoteMutation = gql`
mutation AddQuote($name: String!){
    addQuote(name: $name){
        id
        name
    }
}
`