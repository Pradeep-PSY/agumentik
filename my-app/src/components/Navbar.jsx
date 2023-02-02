import React from 'react'
import { Logo } from '../Logo'
import './navbar.css'
import { Box, Flex, Image, Text } from '@chakra-ui/react'


const Navbar = () => {
    return (
        <Flex justify={'space-between'} bgColor={'transparent'} color='white' className='nav' >
            <Flex>
               <Image h='40px' src='https://assets.website-files.com/6233f2ac51d2013d6dca2856/6233fa2810f7c36829594905_main-logo.png' />
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