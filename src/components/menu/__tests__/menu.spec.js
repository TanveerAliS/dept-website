import React from 'react'
import { render } from '@testing-library/react'
import Menu from '../menu'

const headerDataMock = {
  id: 1,
  logo: 'Dept',
  menuItems: [
    {
      id: 1,
      name: 'HOME',
      url: '/'
    },
    {
      id: 2,
      name: 'WERK',
      url: '/'
    },
    {
      id: 3,
      name: 'OVER',
      url: '/'
    },
    {
      id: 4,
      name: 'DIENSTEN',
      url: '/'
    },
    {
      id: 5,
      name: 'PARTNERS',
      url: '/'
    },
    {
      id: 6,
      name: 'STORIES',
      url: '/'
    },
    {
      id: 7,
      name: 'VACATURES',
      url: '/'
    },
    {
      id: 8,
      name: 'EVENTS',
      url: '/'
    },
    {
      id: 9,
      name: 'CONTACTS',
      url: '/'
    }
  ],
  landenItems: [
    {
      id: 1,
      name: 'global',
      url: '/'
    },
    {
      id: 2,
      name: 'nederland',
      url: '/'
    }
  ]
}

describe('<Menu/>', () => {
  it('renders content', () => {
    const { getByText } = render(<Menu headerData={headerDataMock} />)

    expect(getByText('Dept')).toBeInTheDocument()
    expect(getByText('HOME')).toBeInTheDocument()
    expect(getByText('WERK')).toBeInTheDocument()
    expect(getByText('OVER')).toBeInTheDocument()
    expect(getByText('DIENSTEN')).toBeInTheDocument()
    expect(getByText('PARTNERS')).toBeInTheDocument()
    expect(getByText('STORIES')).toBeInTheDocument()
    expect(getByText('VACATURES')).toBeInTheDocument()
    expect(getByText('EVENTS')).toBeInTheDocument()
    expect(getByText('CONTACTS')).toBeInTheDocument()
    expect(getByText('global')).toBeInTheDocument()
    expect(getByText('nederland')).toBeInTheDocument()
  })
})
