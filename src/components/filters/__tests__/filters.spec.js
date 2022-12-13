import React from 'react'
import { render } from '@testing-library/react'
import Filters from '../filters'

describe('<Filters/>', () => {
  it('renders content', () => {
    const { getByLabelText } = render(<Filters />)

    expect(getByLabelText('Show me')).toBeInTheDocument()
    expect(getByLabelText('in')).toBeInTheDocument()
  })
})
