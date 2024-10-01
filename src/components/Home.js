import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title = "Model S"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing inventory"
          />
        <Section
        title = "Model Y"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing inventory"
        />

        <Section
        title = "Model 3"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing inventory"
        />
        <Section
        title = "Model X"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing inventory"
        />
        <Section
        title = "Lower Cost Solar Panels in America"
        description = "Money-back guarantee"
        backgroundImg = "solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
        />
        <Section
        title = "Solar Panels for Roofs"
        description = "Solar roof costs less than a new roof"
        backgroundImg = "solar-roof.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
        />
        <Section
        title = "Accessories"
        description = ""
        backgroundImg = "Accessories.jpg"
        leftBtnText = "Shop Now"
        rightBtnText = ""
        />
    </Container>
  )
}

export default Home
const Container = styled.section`
  height: 100vh;
`;
