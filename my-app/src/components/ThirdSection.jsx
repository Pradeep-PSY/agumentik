import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ThirdSection = () => {
    return (
        <Box  bgColor={'white'} textAlign={'center'} p='180px' color="black" fontFamily={'effra, sans-serif'} >
            <Text textAlign={'start'} mt='-15px' fontSize='64px' fontWeight={'bold'}>
                Findtrend helps you to increase
            </Text>
            <Text textAlign={'start'} mt='-15px' fontSize='64px' fontWeight={'bold'}>
            your productivity and reduce
            </Text>
            <Text textAlign={'start'} mt='-15px' fontSize='64px' fontWeight={'bold'}>your computer's memory load,</Text>
            <Text textAlign={'start'} mt='-15px' fontSize='64px' color='grey'>an application that can fulfill</Text>
            <Text textAlign={'start'} mt='-15px' fontSize='64px' color='grey'>your daily browsing needs.</Text>
        </Box>
    )
}

export default ThirdSection