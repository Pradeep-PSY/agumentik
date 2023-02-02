import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TopSection from './components/TopSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import ThreeTierPricing from './components/Pricing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <TopSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <ThreeTierPricing />
      </Box>
    </ChakraProvider>
  );
}

export default App;
