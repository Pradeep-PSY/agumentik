import React from 'react'
import Navbar from './Navbar'
import { Box, Text } from '@chakra-ui/react'

const TopSection = () => {
    return (
        <Box bgColor={'black'} color='white'>
        <Navbar />
        <Box m='100px'>

        <Text fontSize={'4xl'} fontWeight={'bold'}>Minimize Your Tabs.</Text>
        <Text fontSize={'4xl'} fontWeight={'bold'}>Find the trends!</Text>

        </Box>
        </Box>

    )
}

export default TopSection