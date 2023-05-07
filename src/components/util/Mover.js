import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useResponsive } from 'utils/common'
import { Box } from '@chakra-ui/react'

// NOTE: USE ONLY IF ScrollerMotion is being used in layout.
export default function Mover({ x, y, move, scale, children, overrideMobile, ...chakra }) {
  const isDesktop = useResponsive('up', 'd')
  return (
    <Box {...chakra}>
      <Parallax
        {...(move && (isDesktop || overrideMobile) && { translate: move })}
        {...(y && (isDesktop || overrideMobile) && { translateY: y })}
        {...(x && (isDesktop || overrideMobile) && { translateX: x })}
        {...(scale && (isDesktop || overrideMobile) && { scale })}

        style={{ transition: 'transform 600ms cubic-bezier(0.39, 0.575, 0.55, 0.905) 0s' }}
      >

        {children}
      </Parallax>
    </Box>
  )
}

{/* Sample usage
  <Mover y={[50,-50]}>
    <Center h='150px' w='400px' bg='beige'>Sample Smooth Parallax</Center>
  </Mover>
*/}

