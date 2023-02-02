import { Box, Button, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const FifthSection = () => {
    const logo = [
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd0cad42def98bc9234_fb.svg",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebcfb87b269833644248_twitter.svg",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebcfb27f3a7788d236c1_dribble.svg",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd022283ac2a9a31783_pinterest.svg",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd0d5b51192c0d8eba9_medium.svg",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd07994e05c4c458dc7_reddit.svg",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd075cf880e0ea2a2b9_vk.svg",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd022283a8eb3a3177e_linkedin.svg"
    ]
    return (
        <Box bgColor='whitesmoke'>
            <Text fontSize='64px' mb='80px' fontWeight={'bold'} fontFamily={'effra, sans-serif'}>All platform connect to Findtrend</Text>
            <Grid templateColumns='repeat(8, 1fr)' m='30px' gap={6}>
                {
                    logo.map((el) => {
                        return <Image p='32px' bgColor="white" borderRadius={'8px'} src={el} />
                    })
                }
            </Grid>

            <Box align={'center'} mt='80px'>

                <Image w='991px' src='https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237edcbb87b26a87b644d4a_tweet%203.png' />
            </Box>
            <Box align={'center'} mt='80px'>

                <Image w='991px' src='https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237edcba1d5211489d884b4_tweet%202.png' />
            </Box>

            <Box align={'center'} mt='80px'>

                <Image w='991px' src='https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237edcbb87b26a87b644d4a_tweet%203.png' />
            </Box>

            <Button bgColor='black' color='white' m='100px' borderRadius='40px'>ViewMore Trend</Button>
        </Box>
    )
}

export default FifthSection