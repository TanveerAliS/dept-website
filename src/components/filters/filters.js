import React from 'react'
import './filters.css'
import { filterWorksData, filterIndustriesData } from '../../mocks/works-data'

const Filters = () => {
  return (
    <div className='filters'>
      <div className='filters__filter-works'>
        <label
          className='filters__label-works'
          htmlFor='worksFilter'
          id='worksLabel'
        >
          Show me
        </label>
        <select
          className='filters__select-works'
          id='worksFilter'
          name='worksFilter'
          aria-labelledby='worksLabel'
        >
          {filterWorksData?.map(item => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className='filters__filter-industries'>
        <label
          className='filters__label-industries'
          htmlFor='industriesFilter'
          id='industriesLabel'
        >
          in
        </label>
        <select
          className='filters__select-industries'
          id='industriesFilter'
          name='industriesFilter'
          aria-labelledby='industriesLabel'
        >
          {filterIndustriesData.map(item => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
