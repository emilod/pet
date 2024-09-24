import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

let client: any = null

export const getClient = () => {
  if (!client) {
    client = new ApolloClient({
      link: new HttpLink({
        uri: 'https://api-mesh.vercel.app/api/graphql',
      }),
      cache: new InMemoryCache(),
    })
  }
  return client
}
