'use server'

import { notFound } from 'next/navigation'
import { generateUrls } from '@/gql/helpers/generateUrls'
import { GET_MENU_STRUCTURE } from '@/gql/queries/menuStructure'
import { client } from '@/lib/apollo-client'

export const revalidate = 600 // revalidate this page every 600 seconds

// eslint-disable-next-line no-restricted-syntax
export default async function CategoryPage({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join('/')
  const { data } = await client.query({
    query: GET_MENU_STRUCTURE,
  })

  const validRoutes = generateUrls(data.menuStructure.items)

  if (!validRoutes.includes(path)) {
    notFound()
  }

  return (
    <div>
      <h1>Category: {path}</h1>
      {/* Your category page content here */}
    </div>
  )
}
