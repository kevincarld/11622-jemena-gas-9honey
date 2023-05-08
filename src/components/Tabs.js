import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Tabs() {

  return (
    <Box bg='sky' color='white' pb={{base: '40px', lg: '80px', d:'114px'}}>
      <Box p={{base: '50px 30px 45px', lg: '80px 30px 45px'}} textAlign={{md: 'center'}}>
        <Text textStyle='sectionTitle'>A natural choice</Text>
        <Text {...texts.subtitle}>Here are just some of the reasons to choose natural gas. Hover over each tile for more details.</Text>
      </Box>

      <Grid sx={styles.cards} templateColumns={{md: 'repeat(2, 375px)', d: 'repeat(3, 400px)'}} gap={{base: '13px'}}>
        <Box className='card card__1'>
          <Box className='icon' as='svg' width="100.363" height="99.546" viewBox="0 0 100.363 99.546">
            <defs>
              <clipPath id="clip-path1">
                <rect id="Rectangle_1029" data-name="Rectangle 1029" width="100.363" height="99.546" transform="translate(0 0)" fill="#173583"/>
              </clipPath>
            </defs>
            <g id="Group_6045" data-name="Group 6045" clip-path="url(#clip-path1)">
              <path id="Path_2391" data-name="Path 2391" d="M50.69,0c.86,4.3,1.576,8.643,2.62,12.9a119.549,119.549,0,0,0,3.649,12.435c3.374,9.263,10.105,15.222,19.43,17.937,7.743,2.254,15.67,3.874,23.974,5.885-6.125,1.315-11.9,2.648-17.723,3.785-16.071,3.14-25.411,12.874-28.563,28.814-1.084,5.484-2.3,10.944-3.739,17.789-1.82-8.046-3.223-14.741-4.858-21.379C42.272,65.146,34.024,57.031,21.061,53.8,14.335,52.124,7.539,50.727,0,49.03c7.144-1.587,13.494-3.025,19.857-4.406,14.879-3.23,23.223-12.805,26.455-27.292C47.593,11.586,48.7,5.8,49.882.034L50.69,0" fill="#173583"/>
              <path id="Path_2392" data-name="Path 2392" d="M19.173,6.646c.187.962.343,1.932.57,2.884a27.061,27.061,0,0,0,.793,2.78,6.158,6.158,0,0,0,4.225,4.01c1.683.5,3.407.866,5.213,1.316-1.332.294-2.589.592-3.854.846-3.494.7-5.525,2.878-6.21,6.442-.236,1.226-.5,2.447-.814,3.977-.4-1.8-.7-3.3-1.056-4.78a6.9,6.9,0,0,0-5.309-5.447c-1.463-.375-2.94-.687-4.58-1.067,1.554-.354,2.934-.676,4.318-.985,3.235-.722,5.049-2.862,5.752-6.1.279-1.285.519-2.578.776-3.868l.176-.007" fill="#173583"/>
              <path id="Path_2393" data-name="Path 2393" d="M22.268,68.179c.187.962.343,1.932.57,2.884a27.061,27.061,0,0,0,.793,2.78,6.158,6.158,0,0,0,4.225,4.01c1.683.5,3.407.866,5.213,1.316-1.332.294-2.589.592-3.854.846-3.494.7-5.525,2.878-6.21,6.442-.236,1.226-.5,2.447-.814,3.977-.4-1.8-.7-3.3-1.056-4.78a6.9,6.9,0,0,0-5.309-5.447c-1.463-.375-2.94-.687-4.58-1.067,1.554-.354,2.934-.676,4.318-.985,3.235-.722,5.049-2.862,5.752-6.1.279-1.285.519-2.578.776-3.868l.176-.007" fill="#173583"/>
              <path id="Path_2394" data-name="Path 2394" d="M80.115,23.212c.141.727.259,1.46.431,2.179a20.408,20.408,0,0,0,.6,2.1,4.652,4.652,0,0,0,3.192,3.03c1.272.381,2.575.654,3.939.994-1.006.222-1.956.448-2.912.64a5.6,5.6,0,0,0-4.692,4.867c-.179.927-.378,1.849-.615,3.005-.3-1.359-.529-2.49-.8-3.611A5.216,5.216,0,0,0,75.247,32.3c-1.105-.283-2.222-.519-3.46-.8,1.174-.268,2.217-.511,3.262-.745A5.467,5.467,0,0,0,79.4,26.14c.21-.971.392-1.948.586-2.922l.133-.006" fill="#173583"/>
            </g>
          </Box>

          <PreLine className='title'>
            {`Clean source
            of energy`}
          </PreLine>

          <Text className='content'>Compared to other energy solutions such as coal, natural gas produces less than half the carbon dioxide emissions. </Text>
        </Box>

        <Box className='card card__2'>
          <Box className='icon' as='svg' width="83.664" height="83.664" viewBox="0 0 83.664 83.664">
            <defs>
              <clipPath id="clip-path2">
                <rect id="Rectangle_1030" data-name="Rectangle 1030" width="83.664" height="83.664" fill="#173583"/>
              </clipPath>
            </defs>
            <g id="Group_6047" data-name="Group 6047" clip-path="url(#clip-path2)">
              <path id="Path_2395" data-name="Path 2395" d="M72.933,10.731A36.638,36.638,0,0,0,16.5,56.894L1.939,71.453a6.619,6.619,0,0,0,0,9.362l.909.909a6.619,6.619,0,0,0,9.362,0L26.77,67.166A36.638,36.638,0,0,0,72.933,10.731M65.346,54.954a25.905,25.905,0,1,1,0-36.635,25.9,25.9,0,0,1,0,36.635" transform="translate(0 0)" fill="#173583"/>
            </g>
          </Box>

          <PreLine className='title'>
            {`Invested in
            the future`}
          </PreLine>

          <Text className='content'>Millions have been invested in research and development in renewable gas to help fuel Australia sustainably into the future.</Text>
        </Box>

        <Box className='card card__3'>
          <Box className='icon' as='svg' width="98.453" height="96.546" viewBox="0 0 98.453 96.546">
            <defs>
              <clipPath id="clip-path3">
                <rect id="Rectangle_1031" data-name="Rectangle 1031" width="98.453" height="96.546" fill="#173583"/>
              </clipPath>
            </defs>
            <g id="Group_6049" data-name="Group 6049" clip-path="url(#clip-path3)">
              <path id="Path_2396" data-name="Path 2396" d="M184.476,205.821H112.05c-.738,0-.736,0-.736-.733q0-17.574,0-35.148c0-1.623.065-3.246.07-4.869,0-1.131-.032-2.264-.077-3.394a.906.906,0,0,1,.425-.845q11.98-8.867,23.949-17.749c3.884-2.88,7.777-5.75,11.644-8.653a.824.824,0,0,1,1.2.021q14.255,10.6,28.534,21.173,3.528,2.616,7.062,5.223a.859.859,0,0,1,.4.8c-.044,1.169-.081,2.339-.077,3.508.008,2.285.065,4.569.066,6.854q.011,16.657,0,33.315c0,.13-.017.261-.034.5M133.8,161.132v12.705a1.89,1.89,0,0,0,.267.044c4,0,8.01,0,12.014.011.469,0,.451-.254.451-.578,0-3.854-.012-7.707.008-11.561,0-.5-.138-.635-.636-.632-3.854.02-7.707.012-11.561.012H133.8m15.484.033v.694q0,5.639,0,11.278c0,.746,0,.747.725.747,3.8,0,7.594-.009,11.391.011.51,0,.678-.12.674-.654-.022-3.835-.012-7.67-.014-11.5,0-.183-.02-.366-.031-.572ZM133.8,189.38h12.7V176.706H133.8Zm28.221-12.675h-12.7V189.38h12.7Z" transform="translate(-98.683 -118.965)" fill="#173583"/>
              <path id="Path_2397" data-name="Path 2397" d="M5.136,43.249,0,36.341l3.661-2.718Q19.14,22.145,34.618,10.667c1.527-1.132,3.043-2.28,4.576-3.4C40.757,6.114,42.346,5,43.9,3.844S47.009,1.516,48.531.312A.91.91,0,0,1,49.875.284c3.036,2.3,6.11,4.556,9.171,6.826q3.493,2.591,6.987,5.181c.146.108.3.207.55.379V5.255H78.5c.01.228.027.431.027.633,0,5.008.007,10.016-.01,15.024a1.122,1.122,0,0,0,.508,1.031q9.46,6.987,18.9,14c.164.122.326.247.524.4L93.332,43.25c-.707-.52-1.387-1.017-2.063-1.518Q70.533,26.354,49.806,10.965a.8.8,0,0,0-1.158.006Q30.066,24.779,11.463,38.56L5.136,43.249" transform="translate(0 -0.001)" fill="#173583"/>
              <path id="Path_2398" data-name="Path 2398" d="M133.422,791.73v6.758H45.314c-.014-.2-.037-.38-.037-.561,0-1.871.009-3.742-.009-5.613,0-.419.076-.6.554-.595q13.606.017,27.213,0h8.66q9.461,0,18.922,0l32.019.009h.786" transform="translate(-40.135 -701.942)" fill="#173583"/>
            </g>
          </Box>

          <PreLine className='title'>
            {`Take control of
            your home`}
          </PreLine>

          <Text className='content'>Cooking or heating with natural gas offers instant and fast control of your stove, barbecue or heating all year round.</Text>
        </Box>

        <Box className='card card__4'>
          <Box className='icon' as='svg' width="99.651" height="99.642" viewBox="0 0 99.651 99.642">
            <defs>
              <clipPath id="clip-path4">
                <rect id="Rectangle_1032" data-name="Rectangle 1032" width="99.651" height="99.642" fill="#173583"/>
              </clipPath>
            </defs>
            <g id="Group_6051" data-name="Group 6051" clip-path="url(#clip-path4)">
              <path id="Path_2399" data-name="Path 2399" d="M0,49.7A49.826,49.826,0,1,1,49.8,99.643,49.842,49.842,0,0,1,0,49.7m8.608.076A41.256,41.256,0,1,0,49.925,8.548,41.192,41.192,0,0,0,8.608,49.771" transform="translate(0 -0.001)" fill="#173583"/>
              <path id="Path_2400" data-name="Path 2400" d="M120.782,123.495l-1.921-2.066c8.45-9,10.526-19,4.524-30.01-4.407-8.084-13.522-12.027-19.918-11.6.447,2.712.881,5.413,1.34,8.11.453,2.667.885,5.34,1.427,7.989a3.558,3.558,0,0,0,1.024,1.86,7.031,7.031,0,1,1-8.8-.033,2.939,2.939,0,0,0,.934-1.57c.985-5.42,1.9-10.853,2.839-16.284-5.487-.729-15.144,3.2-19.986,11.482a24.2,24.2,0,0,0,4.629,29.961l-1.927,2.151c-6.807-5.445-11.511-16.915-7.774-28.392a27.01,27.01,0,0,1,51.226-.334c3.684,10.948-.129,22.49-7.612,28.733" transform="translate(-52.994 -53.442)" fill="#173583"/>
              <path id="Path_2401" data-name="Path 2401" d="M63.8,230.382l-6.811-8.14,8.187-4.7,4.7,5.568L63.8,230.382" transform="translate(-39.819 -151.991)" fill="#173583"/>
              <path id="Path_2402" data-name="Path 2402" d="M231.059,223.124l4.715-5.567,8.166,4.692-6.792,8.14-6.09-7.265" transform="translate(-161.438 -152.005)" fill="#173583"/>
              <path id="Path_2403" data-name="Path 2403" d="M51.985,193.05l-8.144,4.744-3.592-9.953,9.248-1.625,2.489,6.834" transform="translate(-28.122 -130.107)" fill="#173583"/>
              <path id="Path_2404" data-name="Path 2404" d="M251.636,193.084l2.468-6.837,9.237,1.6-3.517,9.979-8.188-4.74" transform="translate(-175.815 -130.129)" fill="#173583"/>
              <path id="Path_2405" data-name="Path 2405" d="M39.28,146.894l9.107,1.636v7.23l-9.107,1.622Z" transform="translate(-27.444 -102.633)" fill="#173583"/>
              <path id="Path_2406" data-name="Path 2406" d="M261.312,155.752v-7.224l9.128-1.661v10.478l-9.128-1.594" transform="translate(-182.576 -102.615)" fill="#173583"/>
              <path id="Path_2407" data-name="Path 2407" d="M259.14,104.5l3.7,9.831-9.218,1.6-2.562-6.746,8.083-4.687" transform="translate(-175.411 -73.015)" fill="#173583"/>
              <path id="Path_2408" data-name="Path 2408" d="M40.663,114.347l3.695-9.814,8.043,4.644c-.746,2.121-1.41,4.1-2.158,6.04a1.186,1.186,0,0,1-.941.616c-2.752-.425-5.491-.931-8.638-1.485" transform="translate(-28.411 -73.036)" fill="#173583"/>
              <path id="Path_2409" data-name="Path 2409" d="M235.162,82.286l-4.691-5.469,5.961-7.127,6.806,7.94-8.076,4.656" transform="translate(-161.027 -48.692)" fill="#173583"/>
              <path id="Path_2410" data-name="Path 2410" d="M70.748,76.845,66.041,82.3l-8.082-4.655,6.814-7.926,5.975,7.122" transform="translate(-40.495 -48.715)" fill="#173583"/>
              <path id="Path_2411" data-name="Path 2411" d="M88.174,51.585l9.046-5.127,3.192,8.729L94.171,58.7l-6-7.111" transform="translate(-61.606 -32.46)" fill="#173583"/>
              <path id="Path_2412" data-name="Path 2412" d="M127.588,39.324l10.119-1.673v9.256l-6.945,1.131-3.174-8.714" transform="translate(-89.144 -26.306)" fill="#173583"/>
              <path id="Path_2413" data-name="Path 2413" d="M208.345,58.729l-6.213-3.518c.992-2.761,2-5.569,3.13-8.718l9.073,5.112-5.99,7.123" transform="translate(-141.227 -32.485)" fill="#173583"/>
              <path id="Path_2414" data-name="Path 2414" d="M169.915,37.652l10.03,1.68c-1.069,2.953-2.009,5.618-3.03,8.25-.089.229-.743.394-1.1.34-1.919-.293-3.826-.664-5.9-1.038Z" transform="translate(-118.718 -26.307)" fill="#173583"/>
            </g>
          </Box>

          <PreLine className='title'>
            {`Cheaper to run
            the more you use `}
          </PreLine>

          <Text className='content'>The more gas appliances you install, the more cost-efficient using gas becomes.</Text>
        </Box>

        <Box className='card card__5'>
          <Box className='icon' as='svg' width="108.324" height="108.361" viewBox="0 0 108.324 108.361">
            <defs>
              <clipPath id="clip-path5">
                <rect id="Rectangle_1033" data-name="Rectangle 1033" width="108.324" height="108.361" fill="#173583"/>
              </clipPath>
            </defs>
            <g id="Group_6053" data-name="Group 6053" clip-path="url(#clip-path5)">
              <path id="Path_2415" data-name="Path 2415" d="M108.324,54.144A54.162,54.162,0,1,1,54.2,0a54.169,54.169,0,0,1,54.128,54.143M54.076,99.057A44.861,44.861,0,1,0,9.313,53.588c-.34,24.868,19.5,45.092,44.763,45.469" transform="translate(0 0)" fill="#173583"/>
              <path id="Path_2416" data-name="Path 2416" d="M120.606,90.686,94.844,116.448,80.829,102.433,69.242,114.019l14.015,14.015,11.587,11.587,37.348-37.348Z" transform="translate(-46.555 -60.973)" fill="#173583"/>
            </g>
          </Box>


          <PreLine className='title'>
            {`It’s safe`}
          </PreLine>

          <Text className='content'>Natural gas has a distinctive smell, making it easy to detect a leak.</Text>
        </Box>


        <Box className='card card__6'>
          <Box className='icon' as='svg' width="112.048" height="75.25" viewBox="0 0 112.048 75.25">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectangle_1034" data-name="Rectangle 1034" width="112.048" height="75.25" fill="#173583"/>
              </clipPath>
            </defs>
            <g id="Group_6055" data-name="Group 6055" clip-path="url(#clip-path)">
              <path id="Path_2417" data-name="Path 2417" d="M72.294,25.979a29.7,29.7,0,0,1,29.8,30.14c-.18,16.1-11.751,28.98-29.377,29.361A29.276,29.276,0,0,1,42.359,55.75,29.893,29.893,0,0,1,72.294,25.979m3.645,51.97c-.842-3.456.979-4.574,3.851-5.515,3.793-1.242,5.607-4.522,6.007-8.385a9.382,9.382,0,0,0-4.457-9.331,58.139,58.139,0,0,0-6.771-3.325A39.333,39.333,0,0,1,69.65,49.1c-.8-.523-1.692-1.885-1.526-2.644a3.89,3.89,0,0,1,2.3-2.4,7.241,7.241,0,0,1,4.1.031,32.876,32.876,0,0,1,4.961,2.462l5.029-4.5c-2.186-1.35-3.835-3.029-5.736-3.392-3.07-.587-2.792-2.9-3.276-4.87H70.866c-.178,1.248-.33,2.312-.423,2.963-2.323,1.022-4.516,1.637-6.309,2.845a7.744,7.744,0,0,0-1.046,12.489,28.315,28.315,0,0,0,6.077,3.869c2.214,1.192,4.6,2.063,6.836,3.215,2.01,1.035,3.315,2.98,2.241,4.964a6.826,6.826,0,0,1-4.455,3.313c-2.117.2-4.428-.848-6.54-1.658a19.923,19.923,0,0,1-3.678-2.481l-5.435,5.127,12.38,6.324c.074.669.214,1.925.354,3.188Z" transform="translate(-16.692 -10.237)" fill="#173583"/>
              <path id="Path_2418" data-name="Path 2418" d="M102.228,8.158c8.093-8.377,21.64-10.489,32.738-5.468a30.121,30.121,0,0,1,17.277,29.465c-.942,11.885-9.408,22.811-20.347,25.8,3.23-11.091,2.515-21.668-3.386-31.541S113.818,10.572,102.228,8.158" transform="translate(-40.285 0)" fill="#173583"/>
              <path id="Path_2419" data-name="Path 2419" d="M38.427,18.265C27.949,24.051,21.081,32.52,18.515,44.1c-2.576,11.624.206,22.172,7.316,31.761-8.856.1-19.523-8.053-23.555-17.788A29.962,29.962,0,0,1,8.884,25.341c7.814-7.774,20.442-10.889,29.543-7.075" transform="translate(0 -6.557)" fill="#173583"/>
            </g>
          </Box>



          <PreLine className='title'>
            {`It can earn you
            cashback`}
          </PreLine>

          <Text className='content'>For every natural gas appliance you buy, you could receive up to $500 cash back, straight in your back pocket, via redemption and for a limited time.</Text>
        </Box>


      </Grid>
    </Box>
  )
}

const styles = {
  cards: {
    justifyContent: 'center',

    '.card': {
      bg: 'white',
      p: {base: '40px 30px 80px',},
      w: 'full',
      maxW: {base: '375px', d: '400px'},

      '.title': {
        color: 'blue',
        fontWeight: 'medium',
        mt: '20px',
        fontSize: {base: '28px', sm: '34px', d:'36px'},
        lineHeight: {base: '33px', sm: '39px', d:'40px'},
      },

      '.content': {
        color: 'black',
        fontSize: {base: '12px', sm: '15px', d: '17px'},
        letterSpacing: '0.5px',
        lineHeight: {base: '20px', sm: '25px', d:'30px'},
      }
    }
  }
}

// font styles
const texts = {
  subtitle: {
    fontSize: {base: '14px', d:"26px"},
    lineHeight: {base: '25px', d: '30px'},
    letterSpacing: '0.4px'
  }
}

