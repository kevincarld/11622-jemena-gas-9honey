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
    <Container>
      <Container p={{base: '33px 0 35px'}} maxW='1155px' mx={{d: '0'}} ml={{d: 'auto'}} mr={{d: '20px'}}>
        <Grid templateColumns={{d: '1fr 1fr'}} gap={{d: '22px'}}>
          <GridItem>
            <Grid templateColumns={{base:"1fr 1fr", d: '1fr'}} gap={{base: '9px'}}>
              <Figure>
                <Img dimension='183x190' w='full' mock='sink-1' />
              </Figure>
              <Figure display={{d: 'none'}}>
                <Img dimension='183x190' w='full' mock='sink-2' />
              </Figure>
            </Grid>

            <Box px={{base: '35px', d: 0}}>
              <PreLine textStyle='body'>
                {`
                And for home renovators looking to update tired fireplaces, installing gas can be a modern way to give an old fireplace a new lease on life, without the need for a chimney. “We love using gas fireplaces for older homes that have beautiful old fireplaces and mantels,” adds Hayes. “There’s something really comforting about seeing a gas flame in the fireplace of an evening.”

                Natural gas is an obvious choice for home cooks. It gives them more control over their culinary creations, with instantaneous feedback providing the ultimate control over heat levels and cutting out the need for preheating, making for speedier cooking, too.

                Or fit out your outdoors for year-round al-fresco living by using gas solutions to heat your patio and your pool, or to add that backyard barbecue you’ve always wanted.

                `}
              </PreLine>
            </Box>
          </GridItem>

          <GridItem display={{base: 'none', d:'block'}}>
            <Img dimension='576x941' mock='sink' fit='cover' w='full' h='full' />
          </GridItem>
        </Grid>
      </Container>

      <Figure px={{base: '35px', d: 0}}>
        <Img dimension='1195x706' mock='sink-feet' w='full' alt='feet crossed with fireplace in the background' />
      </Figure>
    </Container>
  )
}

