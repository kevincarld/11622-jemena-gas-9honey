import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Sink() {

  return (
    <Box p={{base: '33px 0 35px'}}>
      <Grid templateColumns={{base:"1fr 1fr"}} gap={{base: '9px'}}>
        <Figure>
          <Img dimension='183x190' w='full' mock='sink-1' />
        </Figure>
        <Figure>
          <Img dimension='183x190' w='full' mock='sink-2' />
        </Figure>
      </Grid>

      <Grid>
        <Box px={{base: '35px'}}>
          <PreLine textStyle='body'>
            {`
            And for home renovators looking to update tired fireplaces, installing gas can be a modern way to give an old fireplace a new lease on life, without the need for a chimney. “We love using gas fireplaces for older homes that have beautiful old fireplaces and mantels,” adds Hayes. “There’s something really comforting about seeing a gas flame in the fireplace of an evening.”

            Natural gas is an obvious choice for home cooks. It gives them more control over their culinary creations, with instantaneous feedback providing the ultimate control over heat levels and cutting out the need for preheating, making for speedier cooking, too.

            Or fit out your outdoors for year-round al-fresco living by using gas solutions to heat your patio and your pool, or to add that backyard barbecue you’ve always wanted.

            `}
          </PreLine>
        </Box>
      </Grid>

      <Figure px={{base: '35px'}}>
        <Img dimension='1195x706' mock='sink-feet' alt='feet crossed with fireplace in the background' />
      </Figure>
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

