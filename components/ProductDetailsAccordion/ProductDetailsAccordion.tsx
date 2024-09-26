import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Accordion, AccordionItem, Typography } from '@overdose/components'
import { Minus, Plus } from 'react-feather'

import { ProductDetailsAccordionProps } from './declarations/ProductDetailsAccordion.types'
import defaultStyles from './ProductDetailsAccordion.module.css'

export const ProductDetailsAccordion = ({ items, theme, dataTestId }: ProductDetailsAccordionProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })
  return (
    <div className={styles.wrapper} data-test-id={dataTestId}>
      <Accordion defaultValue={[items?.[0]?.id]} multiple expandIcon={<Plus />} collapseIcon={<Minus />}>
        {items?.map((item) => (
          <AccordionItem
            key={item.id}
            theme={{
              control: styles.accordion_item_header,
              content_inner: styles.accordion_content_inner,
              expanded: styles.expanded,
            }}
            header={
              <Typography theme={{ root: styles.title }} tag="span">
                {item.title}
              </Typography>
            }
            name={item.id}>
            {typeof item.panel === 'string' ? <Typography tag="p">{item.panel} </Typography> : item.panel}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
