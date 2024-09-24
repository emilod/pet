import { gql } from '@apollo/client'

export const GET_MENU_STRUCTURE = gql`
  {
    menuStructure {
      items {
        categoryId
        name
        icon
        filters {
          attribute_code
          attribute_value
        }
        children {
          categoryId
          name
          icon
          filters {
            attribute_code
            attribute_value
          }
          children {
            categoryId
            name
            icon
            children {
              categoryId
              name
              icon
              children {
                categoryId
                name
                icon
              }
            }
          }
        }
      }
    }
  }
`
