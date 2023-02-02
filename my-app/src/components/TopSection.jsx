import React from 'react'
import Navbar from './Navbar'
import './topsection.css'
import { Box, Button, Flex, Text } from '@chakra-ui/react'

const TopSection = () => {
    return (
        <Box bgColor={'black'} color='white'  >
            <Navbar />
            <Flex  alignItems={'center'} className="anim" justifyContent={'center'} >

                <Box mt='90px'>
                    <Text fontSize={'50px'} fontWeight={'900'} lineHeight={'80px'}>Minimize Your Tabs.</Text>
                    <Text fontSize={'50px'} fontWeight={'900'} lineHeight={'80px'}>Find the trends!</Text>
                    <Text fontSize={'14px'} color={'grey'}>Don’t let your computer memories consumes all of those browser tabs.</Text>
                    <Text fontSize={'14px'} color={'grey'}>Findtrend  let you gathers all of your favorite website into one place.</Text>
                    <Button m='50px'  size='lg' borderRadius={'40px'} color='#000000' bgColor='#a8ff35'>Get Started</Button>
                </Box>

            </Flex>

        </Box>

    )
}

export default TopSection