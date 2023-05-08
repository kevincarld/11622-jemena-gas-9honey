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
      <Img display={{base: 'block', md: 'none'}} dimension='375x618' src='./images/footer-sm.jpg' mock='footer' w='full' alt='lady in the pool' />
      <Img display={{base: 'none', md: 'block'}} minH='600px' dimension='1920x800' src='./images/footer.jpg' mock='footer' w='full' fit='cover' alt='lady in the pool' />

      <Box pos='absolute' inset={{base: '30% 0 auto 0', sm: '40% 0 auto 0'}} textAlign={'center'} px={{base: '20px'}}>
        <PreLine textStyle='sectionTitle'>
          {`Give your home
          good energy`}
        </PreLine>

        <Button>gonaturalgas.com.au</Button>
      </Box>

      <FeatureFooter href='#' />
    </Box>
  )
}
