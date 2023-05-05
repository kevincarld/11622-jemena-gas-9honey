import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import FeatureFooter from './util/FeatureFooter'
export default function Footer() {

  return (
    <Box pos='relative' color='white'>
      <Img dimension='375x618' mock='footer' alt='lady in the pool' />

      <Box pos='absolute' inset='40% 0 auto 0' textAlign={'center'} px={{base: '20px'}}>
        <PreLine {...texts.title}>
          {`Give your home
          good energy`}
        </PreLine>

        <Button>gonaturalgas.com.au</Button>
      </Box>

      <FeatureFooter href='#' />
    </Box>
  )
}

// font styles
const texts = {
  title: {
    fontWeight: 'bold',
    fontSize: {base: '41px'},
    lineHeight: {base: '45px'},
  }
}

