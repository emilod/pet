import { Accordion, AccordionItem } from '@overdose/components'
import { ChevronDown, ChevronUp, Search } from 'react-feather'

import { Input } from '../Input/Input'
import { FilterItem } from './FilterItem'
import styles from './FilterSearch.module.css'

export const FilterSearch = ({ title = 'Brand', placeholder = 'Search', items = [] }) => {
  return (
    <div className={styles.wrapper}>
      <Accordion expandIcon={<ChevronDown />} collapseIcon={<ChevronUp />}>
        <AccordionItem
          name="filter_search"
          header={title}
          theme={{
            control: styles.accordionControl,
            content_inner: styles.accordionContentInner,
            title: styles.accordionTitle,
            default: styles.accordionDefault,
            icon: styles.icon,
          }}>
          <Input
            placeholder={placeholder}
            theme={{ root: styles.searchInput, suffix: styles.inputSuffix }}
            suffix={<Search width="12px" height="12px" />}
          />
          <div className={styles.filterItems}>
            {items.map((item, idx) => (
              <FilterItem checked={idx % 3 === 0} key={idx} count={item.count} label={item.label} />
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
