import { MenuItem } from '../graphql'

export function generateUrls(items: MenuItem[], basePath = ''): string[] {
  const urls: string[] = []

  items.forEach((item) => {
    // Generate the current path by formatting the name
    const currentPath = `${basePath}/${item.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`

    // Add the current path to the array of URLs, trim leading/trailing slashes
    urls.push(currentPath.replace(/^\/|\/$/g, ''))

    // Recursively generate URLs for children if they exist
    if (item.children) {
      const validChildren = item.children.filter((child): child is MenuItem => child !== null && child !== undefined)
      urls.push(...generateUrls(validChildren, currentPath))
    }
  })

  return urls
}
