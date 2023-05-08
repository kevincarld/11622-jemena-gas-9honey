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
import { animation_zoom } from 'utils/motion'
import Mover from './util/Mover'

export default function Footer() {

  return (
    <Box pos='relative' color='white' overflow='hidden'>
      <Img viewport={{once: true}} as={motion.img} variants={animation_zoom} initial='hide' whileInView='zoom' display={{base: 'block', md: 'none'}} dimension='375x618' src='./images/footer-sm.jpg' mock='footer' w='full' alt='lady in the pool' />
      <Img viewport={{once: true, margin: '0px 0px -150px 0px'}} as={motion.img} variants={animation_zoom} initial='hide' whileInView='zoom' display={{base: 'none', md: 'block'}} minH='600px' dimension='1920x800' src='./images/footer.jpg' mock='footer' w='full' fit='cover' alt='lady in the pool' />

      <Box as={motion.div} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1.2}}} viewport={{once: true, margin: '0px 0px -150px 0px'}} pos='absolute' inset={{base: '30% 0 auto 0', sm: '40% 0 auto 0', d: '30% 0 auto 0'}} textAlign={'center'} px={{base: '20px'}}>
        <Mover y={[50, 0]} shouldAlwaysCompleteAnimation>
          <PreLine textStyle='sectionTitle'>
            {`Give your home
            good energy`}
          </PreLine>

          <Button as={NineLink} href='https://www.gonaturalgas.com.au/'>gonaturalgas.com.au</Button>
        </Mover>
      </Box>

      <FeatureFooter href='https://www.gonaturalgas.com.au/' />
    </Box>
  )
}
