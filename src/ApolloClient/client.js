import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/home'
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink])
});