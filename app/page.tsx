import { GET_MENU_STRUCTURE } from '@/gql/queries/menuStructure'
import { getClient } from '@/lib/apollo-client'

// eslint-disable-next-line no-restricted-syntax
export default async function Home() {
  const client = getClient()
  const { data } = await client.query({
    query: GET_MENU_STRUCTURE,
    context: {
      fetchOptions: {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      },
    },
  })

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Page content:
    </div>
  )
}
