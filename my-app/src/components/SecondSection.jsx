import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const SecondSection = () => {
  return (
    <Box bgColor={'#a8ff35'} fontFamily={'effra, sans-serif'}  p='140px'  color={'white'}>
        <Box >

        <Text m='60px' fontSize='72px' color='#000000' fontWeight='bold' fontFamily={'effra, sans-serif'}  p='5' >Open new tabs is sh*t</Text>
        </Box>

        <Box borderRadius='16px' p='80px' bgColor={'white'} display={'inline-block'}>
            <Box bgColor={'#030303'}  color='white' display='inline-block' p='3' width='40vh' > FindTrend </Box>
        </Box>
        <Box mt='100px'>
            <Text color='#000' fontSize='18px'>A solution for your browser tabs and don’t make your device get slower over time.</Text>
            <Text color='#000' fontSize='18px'> Get ease and faster to discover a trend with just one tab.</Text>
        </Box>
    </Box>
  )
}

export default SecondSection