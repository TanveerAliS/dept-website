import React from 'react'
import './clients.css'

const Clients = ({ clientsDescription, clientsData }) => {
  return (
    <section className='clients' role='complementary'>
      <h2 className='clients__title'>{clientsDescription.title}</h2>
      <p className='clients__content'>{clientsDescription.description}</p>
      <div className='clients__images'>
        {clientsData?.map(client => (
          <div key={client.id} className='clients__logo'>
            <img src={client.image} alt={client.alt} />
          </div>
        ))}
      </div>
      <div className='clients__images--desktop-only'>
        {clientsData?.map(client => (
          <div key={client.id} className='clients__logo'>
            <img src={client.image} alt={client.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
