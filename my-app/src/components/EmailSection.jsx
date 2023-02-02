import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const EmailSection = () => {
  return (
    <Box p='140px' bgColor='#a8ff35'  fontFamily={'effra, sans-serif;'}>
        <Text fontSize='72px' fontWeight='bold'>Join us on email for</Text>
        <Text fontSize='72px' color='#87d322' mt='-20px' fontWeight={'bold'}>more trending topics</Text>
        <Button color='white' m='4 ' borderRadius={'40px'} fontSize='18px' p='16px 52px' lineHeight={'18px'} bgColor='black'>Join Now</Button>
    </Box>
  )
}

export default EmailSection