import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api-mesh.vercel.app/api/graphql',
  // documents: 'gql/**/*.tsx',
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
