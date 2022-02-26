import React from 'react'
import styled from 'styled-components'
import Testimony from '../../components/Common/Testimony'
import { testimony } from '../../data/testimony.data'

const TestimonialsStyled = styled.div`
  h2 {
    text-align: center;
  }
  padding: 50px 0;
  .testimonials-container {
    display: grid;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .testimonials-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  
  @media (min-width: 1024px) {
    .testimonials-container {
      gap: 40px;
    }
  }
`

const Testimonials = () => {
  return (
    <TestimonialsStyled>
      <div className="wrapper">
        <h2>Testimonios</h2>
        <div className="testimonials-container">
          {testimony.map(i => {
            return (
              <Testimony key={i.id} image={i.image} text={i.text} name={i.name} />
            )
          })}
        </div>
      </div>
    </TestimonialsStyled>
  )
}

export default Testimonials
