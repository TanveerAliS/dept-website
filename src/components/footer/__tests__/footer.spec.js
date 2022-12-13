import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../footer'

const footerDataMock = {
  id: 1,
  title: 'Dept',
  chamberOfCommerce: '12345678',
  vat: 'NL 1234567890',
  menu: [
    {
      id: 1,
      name: 'Item 1',
      url: '/'
    },
    {
      id: 2,
      name: 'Item 2',
      url: '/'
    }
  ]
}

describe('<Footer/>', () => {
  it('renders content', () => {
    const { getByText, getByAltText } = render(
      <Footer footerData={footerDataMock} />
    )

    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
    expect(getByText('Chamber of Commerce: 12345678')).toBeInTheDocument()
    expect(getByText('VAT: NL 1234567890')).toBeInTheDocument()
    expect(getByText('Terms and conditions')).toBeInTheDocument()
    expect(getByText('© 2022 Dept Agency')).toBeInTheDocument()
  })
})
