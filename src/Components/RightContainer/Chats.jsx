import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Chats = ({ ele }) => {
  // console.log(ele) ;
  return (
    <Box >
        <Flex justifyContent={'flex-end'}>
          <Text m={5} bg={'#daf8cb'} maxW={'fit-content'} py={2} px={5} borderRadius={3} >{ele.lastText}</Text>
        </Flex>
        <Flex justifyContent={'flex-start'}>
          <Text m={5} bg={'white'} maxW={'fit-content'} py={2} px={5} borderRadius={3} >{ele.lastText}</Text>
        </Flex>
    </Box>
  )
}

export default Chats
