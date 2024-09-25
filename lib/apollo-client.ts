import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

let apolloClient: any = null

export const getClient = () => {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: new HttpLink({
        uri: 'https://api-mesh.vercel.app/api/graphql',
      }),
      cache: new InMemoryCache(),
    })
  }
  return apolloClient
}

export const client = getClient()
