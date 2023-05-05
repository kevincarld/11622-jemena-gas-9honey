import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, AspectRatio } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Banner() {

  return (
    <Figure>
      <Img display={{base: 'block', lg: 'none'}} dimension='375x600' w='full' alt='living room' mock='banner-1' />
      <Img display={{base: 'none', lg: 'block'}} dimension='1920x838' w='full' alt='living room' mock='banner-1' />
    </Figure>
  )
}

// font styles
const texts = {
  xx: {

  }
}

