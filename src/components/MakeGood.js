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
    <Box pos='relative'>
      <Figure>
        <Img display={{base: 'block', d: 'none'}} dimension='375x336' w='full' src='./images/makegood-sm.jpg' mock='makegood-1' />
        <Img display={{base: 'none', d: 'block'}} minH={{d: '740px'}} dimension='1920x861' src='./images/makegood.jpg' w='full' fit='cover' mock='makegood-2' />
      </Figure>

      <Container pos={{d: 'absolute'}} inset='0 0 0 0' zIndex='2' >
        <Box
          as={motion.div}
          initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0, transition: {duration: 1.2}}}
          viewport={{ margin: '0px 0px -150px 0px'}}
          bg='blue'
          color='white'
          px={{base: '35px', d: '70px' }}
          pt={{base: '39px', d: '46px' }}
          pb={{base: '44px'}}
          pos={{d: 'absolute'}}
          inset='0 20px 0 47%'
        >
          <PreLine as='h2' textStyle='sectionTitle' mb={{d: '20px'}}>
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
      </Container>
    </Box>
  )
}

