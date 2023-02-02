import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

const FourthSection = () => {

    const logo = [
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e746d2043fde51a507_brand1.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e875cf8865fda28f23_brand2.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e7b6d9c802ed876589_brand3.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e7f50b0fbee8f594d2_brand4.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e7a33e7776d26d8a5e_brand5.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8cad42d5498bc7762_brand6.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e74711c251a0033a44_brand7.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8fb8c247f4490353b_brand8.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8a53e585d2b48dffd_brand9.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e885542b4446a1c854_brand10.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8a33e7728c96d8a5f_brand11.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8fbf80ecd49f5fa9b_brand12.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8e1f64badb4c39459_brand13.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8466ffd7770a154e9_brand14.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8d5b5110a5fd8d53c_brand15.png",
        "https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8967af5e96b59e6d8_brand16.png"
    ]

    const lg = [
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
        <Box  fontFamily={'effra, sans-serif'}>
            <Text fontSize='64px' fontWeight={'bold'} color='#000'>Findtrend make +1000 Startup grow</Text>
            <Grid templateColumns='repeat(4, 1fr)'  m='30px' gap={6}>
               {
                logo.map((el)=>{
                   return <Image src={el} />
                })
               }
            </Grid>
        </Box>
    )
}

export default FourthSection