import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Intro() {

  return (
    <Container p={{base: '49px 0 53px', d: '109px 0 96px'}}  maxW='1070px' mx='auto'>
      <Box px={{base: '30px', d: 0}}>
        <Text as='h2' {...texts.heading} mb={{base: '30px'}}>Home is where the heart is, sure. But when we think about the beating heart of a home, we often overlook the elements that make it operate at its dreamiest. </Text>

        <Grid templateColumns={{lg: '1fr 1fr'}} gap={{lg: '56px'}}>
          <Text textStyle={'body'}>While we may think about room design or furniture purchases, just as important are its energy sources. They’re the silent operators that make everything run smoothly; they’re the premium fittings that warm you on cold nights and enable you to cook chef-inspired recipes with precision. That’s what really gives a home its heart.</Text>
          <Text textStyle={'body'}>Emma Blomfield, director of Sydney-based interior-design firm Emma Blomfield Studio, has noticed more home builders and renovators are becoming savvy in their requests for energy supplies. “We have noticed our clients are asking more and more about cost-effective ways to heat and cool their homes,” she says. “Natural gas is a very popular option for this.”</Text>
        </Grid>

      </Box>

      <Figure my={{base: '41px'}}>
        <Img dimension='1074x511' mock='intro-1' src='./images/intro-1.jpg' alt='fireplace' />
      </Figure>

      <Grid px={{base: '30px', d:0}} templateColumns={{lg: '1fr 1fr'}} gap={{lg: '56px'}}>
        <PreLine textStyle='body'>
          {`It’s no secret that we are facing huge challenges as the cost of living continues to rise. This is not the time to be making risky choices with our hard-earned cash. Now is the time to be investing in solutions that will allow us to manage our day-to-day costs of living.

          While natural-gas appliances may cost more upfront, as a long-term investment they can be more cost-effective than other energy solutions as they are both more energy efficient and reliable.

          And did you know that in NSW the cost of natural gas per unit decreases as your consumption increases? This means the more gas appliances you install, the more cost-efficient using gas becomes. `}
        </PreLine>

        <PreLine textStyle='body'>
          {`“It’s a practical and cost-effective choice for renovators and new-home builders,” explains Martina Hayes, director of building- and interior-design company Martina Hayes.

          It’s the way we choose to fuel our homes that really adds that sprinkling of pizzazz. Natural gas is the on-demand, premium choice.

          Producing half the carbon-dioxide emissions of coal-powered electricity sources, natural gas is also a cleaner, greener way to power your home. Combining gas with solar-powered systems can give your spaces that extra boost they need.`}
        </PreLine>
      </Grid>
    </Container>
  )
}

// font styles
const texts = {
  heading: {
    color: 'blue',
    fontWeight: 'medium',
    fontSize: { base: '20px', d: '26px' },
    lineHeight: { base: '29px', d: '38px' },
  }
}

