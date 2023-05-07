import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import Mover from './util/Mover'
import { Parallax } from 'react-scroll-parallax'
import FeatureHeader from './util/FeatureHeader'

export default function Hero() {

  return (
    <Box pos='relative' overflow='hidden' color='white'>
      <FeatureHeader href='#' />

      <Box h='630px' >
        <Img dimension='375x627' mock='bg'  w='full' fit='cover' />
        <Box pos='absolute' bottom='0' left='0' right='0' display='flex' flexDir={'column'} alignItems={'center'}>
          <PreLine as='h1' {...texts.title} px='30px' pb='60px'>
            {`Make
              your dream
              home even
              dreamier`}
          </PreLine>

          <Img dimension='375x209' mock='front' mx='auto' zIndex='2' pos='relative' />
        </Box>
      </Box>


    </Box>
  )
}

// font styles
const texts = {
  title: {
    fontWeight: 'bold',
    fontSize: {base: '40px', sm: '51px'},
    lineHeight: {base: '46px', sm: '56px'},
  }
}

