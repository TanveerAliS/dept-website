import React from 'react'
import './works.css'
import CardImage from '../cards/card-image'
import CardText from '../cards/card-text'
import CardTestemonial from '../cards/card-testemonial'

const Works = ({ testemonialData, worksData }) => {
  return (
    <section className='works' role='main'>
      <div className='works__cards'>
        {worksData.slice(0, 4).map((work, index) => (
          <CardImage props={work} highlight={false} key={index} />
        ))}
        <div className='works__cards-line--reverse'>
          <div className='works__cards-column'>
            {worksData.slice(4, 7).map((work, index) => (
              <CardText props={work} key={index} />
            ))}
          </div>
          {worksData.slice(6, 7).map((work, index) => (
            <CardImage props={work} highlight={true} key={index} />
          ))}
        </div>
        {worksData.slice(7, 9).map((work, index) => (
          <CardImage props={work} highlight={false} key={index} />
        ))}
        <div className='works__cards-line'>
          <div className='works__cards-column'>
            {worksData.slice(9, 12).map((work, index) => (
              <CardText props={work} key={index} />
            ))}
          </div>
          <div className='works__desktop-only'>
            {worksData.slice(6, 7).map((work, index) => (
              <CardImage props={work} highlight={true} key={index} />
            ))}
          </div>
        </div>
        {worksData.slice(11, 15).map((work, index) => (
          <CardImage props={work} highlight={false} key={index} />
        ))}
        <CardTestemonial props={testemonialData} />
        {worksData.slice(15, 17).map((work, index) => (
          <CardImage props={work} highlight={false} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Works
