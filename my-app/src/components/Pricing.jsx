import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12} bgColor='black' color='white'>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Get your best deal
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12} bgColor='white' color='black'>
            <Text fontWeight="500" fontSize="2xl">
              Personal
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                8
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem color='black'>
                <ListIcon as={FaCheckCircle}  />
                Up to 5 page each group
              </ListItem>
              <ListItem color='black'>
                <ListIcon as={FaCheckCircle}  />
                Up to 10 group page
              </ListItem>
              <ListItem color='black'>
                <ListIcon as={FaCheckCircle}  />
                5 Days group page saved
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" bgColor="#a8ff35" color='black' variant="outline">
                Start Free Trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12} bgColor="#a8ff35" color='black'>
              <Text fontWeight="500" fontSize="2xl">
                Reguler
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  20
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={'#a8ff35'}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12} bgColor={'#a8ff35'}>
                <ListItem color='black'>
                  <ListIcon as={FaCheckCircle}  />
                  Up to 15 page each group
                </ListItem>
                <ListItem color='black'>
                  <ListIcon as={FaCheckCircle}  />
                  Download page up to 20 page
                </ListItem>
                <ListItem color='black'>
                  <ListIcon as={FaCheckCircle}  />
                  Up to 10 group page
                </ListItem>
                <ListItem color='black'>
                  <ListIcon as={FaCheckCircle}  />
                  15 Days group page saved
                </ListItem>
               
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" bgColor='black' color='white'>
                  Start Free Trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12} bgColor='white' color='black'>
            <Text fontWeight="500" fontSize="2xl">
              Premium
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                48
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} color='black' textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle}  />
                Unlimited group pages
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle}  />
                Unlimited download page
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle}  />
                30 Days group page saved
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle}  />
                Customize sorting group pages
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" bgColor='#a8ff35' color='black' variant="outline">
                Start Free Trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}