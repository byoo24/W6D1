import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1000px;
`

const MainText = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
`



const Hero = () => {

    return (
        <StyledHero>
          <MainText>Brian Yoo</MainText>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </StyledHero>
    )
}


export default Hero