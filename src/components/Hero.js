import React from 'react'
import { Center, Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
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
      <FeatureHeader href='https://www.gonaturalgas.com.au/' />

      <Box h={{base: '630px', sm: 'auto'}} display={{base: 'block', md: 'none'}}>
        <Img dimension='375x627' mock='bg' src='./images/hero-sm.jpg' h='full' w='full' fit='cover' />
        <Box pos='absolute' bottom='0' left='0' right='0' display='flex' flexDir={'column'} alignItems={'center'}>
          <Parallax translateY={[0, 100]} shouldAlwaysCompleteAnimation='true' >
            <PreLine as='h1'  px='30px' pb='60px' sx={{
              fontWeight: 'bold',
              fontSize: '40px',
              lineHeight: '46px',
              '@media(min-width: 375px)': {
                fontSize: '51px',
                lineHeight: '56px',
              },
              '@media(min-width: 400px)': {
                pb: '30%'
              },
              '@media(min-width: 515px)': {
                pb: '50%'
              },
              '@media(min-width: 768px)': {
                pb: '70%'
              },
            }}>
              {`Make
                your dream
                home even
                dreamier`}
            </PreLine>
          </Parallax>

          <Img dimension='375x209' mock='front' src='./images/hero-obj-sm.png' fit='contain' zIndex='2' pos='relative' />
        </Box>
      </Box>

      <Box display={{base: 'none', md: 'block'}}>
        <Img dimension='1920x856' mock='bg' src='./images/hero.jpg' minH={{base: '700px'}}  w='full' h='full' fit='cover' />

        <Box pos='absolute' inset='0 0 0 0' display='flex' alignItems='center'>
          <Container w='full'
            sx={{
              '>div': {
                transition: {d: 'transform 600ms cubic-bezier(0.39, 0.575, 0.55, 0.905) 0s' }
              }
            }}
          >
            <Parallax translateY={[0, 100]} shouldAlwaysCompleteAnimation='true'>
              <PreLine as='h1' {...texts.title} w='full' px={{base: '30px', d: '80px'}} pb={{base:'60px', d: '100px', wide: '150px'}}>
                {`Make your
                dream homes
                even dreamier`}
              </PreLine>
            </Parallax>
          </Container>
        </Box>

        <Box pos='absolute' inset='auto 0 0 0'>
          <Container w='full'>
            <Img maxW={{base:"65%", wide: 'none'}} dimension='1061x394' mock='front' src='./images/hero-obj.png'  zIndex='2' pos='relative' ml={{ wide: '-200px'}} />
          </Container>
        </Box>


      </Box>


    </Box>
  )
}

// font styles
const texts = {
  title: {
    fontWeight: 'bold',
    fontSize: {base: '40px', sm: '51px', wide: '85px'},
    lineHeight: {base: '46px', sm: '56px', wide: '92px'},
  }
}

