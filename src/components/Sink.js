import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import { animation_clipper, animation_zoom } from 'utils/motion'

export default function Sink() {

  return (
    <Container>
      <Container p={{base: '33px 0 35px'}} maxW='1155px' mx={{d: '0'}} ml={{d: 'auto'}} mr={{d: '20px'}}>
        <Grid templateColumns={{d: '1fr 1fr'}} gap={{d: '22px'}}>
          <GridItem>
            <Grid templateColumns={{base:"1fr 1fr", d: '1fr'}} gap={{base: '9px'}}>
              <Figure as={motion.figure} variants={animation_clipper} initial='fromLeft' whileInView='toRight'>
                <Img display={{d: 'none'}} dimension='183x190' w='full' src='./images/sink-1-sm.jpg' mock='sink-1' />
                <Img display={{base: 'none', d: 'block'}} dimension='522x385' w='full' src='./images/sink-1.jpg' mock='sink-1' />
              </Figure>
              <Figure as={motion.figure} variants={animation_clipper} initial='fromRight' whileInView='toLeft' display={{d: 'none'}}>
                <Img dimension='183x190' w='full' src='./images/sink-2-sm.jpg' mock='sink-2' />
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
            <Figure as={motion.figure} variants={animation_clipper} initial='fromRight' whileInView='toLeft'>
              <Img dimension='576x941' mock='sink' fit='cover' src='./images/sink-2.jpg' w='full' h='full' />
            </Figure>
          </GridItem>
        </Grid>
      </Container>

      <Figure overflow='hidden' px={{base: '35px', d: 0}}>
        <Img as={motion.img} variants={animation_zoom} initial='hide' whileInView='zoom' dimension='1195x706' mock='sink-feet' src='./images/sink-3.jpg' w='full' alt='feet crossed with fireplace in the background' />
      </Figure>
    </Container>
  )
}

