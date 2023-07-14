import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Chats = ({ ele }) => {
  return (
    <Box>
      <Flex justifyContent={'flex-start'} >
        <Text h={'fit-content'} m={5} bg={'white'} maxW={'fit-content'} py={2} px={5} borderRadius={3} >{ele.text}</Text>
      </Flex>
      <Flex justifyContent={'flex-end'} >
        <Text h={'fit-content'} m={5} bg={'#daf8cb'} maxW={'fit-content'} py={2} px={5} borderRadius={3} >{ele.text}</Text>
      </Flex>
    </Box>
  )
}

export default Chats
