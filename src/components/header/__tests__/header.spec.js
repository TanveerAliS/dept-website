import React from 'react'
import { render } from '@testing-library/react'
import Header from '../header'

const headerDataMock = {
  id: 1,
  title: 'Work',
  logo: 'Dept',
  button: 'Read more',
  desktop: 'desktopImage',
  mobile: 'mobileImage',
  alt: 'Man on his back with a backpack in front of a white board'
}

describe('<Header/>', () => {
  it('renders content', () => {
    const { getByText, getAllByAltText } = render(
      <Header headerData={headerDataMock} />
    )

    expect(getByText('Dept')).toBeInTheDocument()
    expect(getByText('Menu')).toBeInTheDocument()
    expect(getByText('Work')).toBeInTheDocument()
    expect(
      getAllByAltText(
        'Man on his back with a backpack in front of a white board'
      )[0]
    ).toBeInTheDocument()
  })
})
