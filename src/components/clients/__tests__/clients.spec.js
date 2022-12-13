import React from 'react'
import { render } from '@testing-library/react'
import Clients from '../clients'

const clientsDescriptionMock = {
  id: '01',
  title: 'Clients',
  description: 'Some description.'
}

const clientsDataMock = [
  {
    id: 'companyX',
    image: 'companyXLogo',
    alt: 'company logo companyX'
  },
  {
    id: 'companyY',
    image: 'companyYLogo',
    alt: 'company logo companyY'
  }
]

describe('<Clients/>', () => {
  it('renders content', () => {
    const { getByText, getAllByAltText } = render(
      <Clients
        clientsDescription={clientsDescriptionMock}
        clientsData={clientsDataMock}
      />
    )

    expect(getByText('Clients')).toBeInTheDocument()
    expect(getByText('Some description.')).toBeInTheDocument()
    expect(getAllByAltText('company logo companyX')[0]).toBeInTheDocument()
    expect(getAllByAltText('company logo companyY')[0]).toBeInTheDocument()
  })
})
