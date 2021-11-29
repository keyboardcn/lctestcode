import { 
    gql,
    ApolloClient,
    InMemoryCache,
  } from '@apollo/client';

// apollo client setup, connect
export const client = new ApolloClient({
    uri: 'http://localhost/graphql',
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
mutation AddQuote($name: String!, $description: String, $price: Int, $userId: ID){
    addQuote(name: $name, description: $description, price: $price, userId: $userId){
        id
        name
    }
}
`