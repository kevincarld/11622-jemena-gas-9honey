import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function MakeGood() {

  return (
    <Box>
      <Figure>
        <Img dimension='375x336' w='full' mock='makegood-1' />
      </Figure>

      <Box
        bg='blue'
        color='white'
        px={{base: '35px' }}
        pt={{base: '39px' }}
        pb={{base: '44px'}}
      >
        <PreLine as='h2' {...texts.title}>
          {`Make a good
          space great`}
        </PreLine>

        <PreLine>
          {`
          And it’s not just its practicality that makes natural gas a great choice for builders or renovators; it has many other perks.

          Those who have natural gas in their home already will espouse benefits such as aesthetic value, smooth operation or comfortable living. They can tell you all about how the toasty, warm glow of a fireplace can transform a room, or how cooking with gas makes whipping up a restaurant-quality meal quick and easy.

          Blomfield loves to incorporate a double-sided gas fireplace as a stunning focal point in her designs. “If possible, I place it as a stylish divider between the living area and dining room, visually separating the two spaces without creating a barrier,” she explains.

          “Double-sided fireplaces are such an attractive and convenient way to provide heat and create an inviting atmosphere while also being energy-efficient.”`}
        </PreLine>
      </Box>
    </Box>
  )
}

// font styles
const texts = {
  title: {
    fontWeight: 'bold',
    fontSize: {base: '36px'},
    lineHeight: {base: '46px'},
  }
}
