import React from 'react'
import { Logo } from '../Logo'
import './navbar.css'
import { Box, Flex, Text } from '@chakra-ui/react'


const Navbar = () => {
    return (
        <Flex justify={'space-between'} bgColor={'transparent'} color='white' className='nav' >
            <Flex>
                <Logo m='3'mr='0'  h="4vmin" pointerEvents="none" />
                <Text m='3' ml='1'>FindTrend</Text>
            </Flex>
            <Flex>
                <Text m='3'>About</Text>
                <Text m='3'>How it works</Text>
                <Text m='3'>Pricing</Text>
                <Text m='3'>Solutions</Text>
                <Text m='3'>Features</Text>
            </Flex>
            <Flex>
                <Text m='3' p='2'>Login</Text>
                <Text m='3' color='black' bgColor='white'borderRadius={'40px'}  className='btn'>Register</Text>
            </Flex>
        </Flex>
    )
}

export default Navbar