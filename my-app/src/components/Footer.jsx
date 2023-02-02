import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex p='30px' justifyContent={'space-between'}>

    <Box>
        <Image  h='40px' src='https://assets.website-files.com/6233f2ac51d2013d6dca2856/62343bdfa8974144b364a891_main-logo_dark%27.png' />
    </Box>

    <Flex w='800px' fontSize='14px' justifyContent={'space-between'} alignItems={'center'} >
        <Box >

        <Text>PrivacyPolicy</Text>
        </Box>
        <Box>

        <Text>TermsandConditions</Text>
        </Box>
        <Text>Contact Us</Text>
        <Text>Careers</Text>
    </Flex>
    </Flex>
  )
}

export default Footer