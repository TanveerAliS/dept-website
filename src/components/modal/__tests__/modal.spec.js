import React from 'react'
import { render } from '@testing-library/react'
import Modal from '../modal'

const textContentMock = 'text content'

describe('<Modal/>', () => {
  it('renders content', () => {
    const { getByText } = render(<Modal textContent={textContentMock} />)

    expect(getByText('text content')).toBeInTheDocument()
    expect(getByText('OK')).toBeInTheDocument()
  })
})
