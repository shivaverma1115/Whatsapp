import React from 'react'
import Header from './Header';
import InputSec from './InputSec';
import { Box, Flex } from '@chakra-ui/react';
import UserDiv from './UserDiv';
const LeftContainer = () => {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <Flex width={"30%"} >
      <Box overflow={"auto"} w={"100%"}>
        <Box position={'sticky'}top={0} bg={'white'}py={2}>
          <Header />
          <InputSec />
        </Box>
        <Box>
          {
            numbers.map((ele, i) =>
              <UserDiv key={i} />
            )
          }
        </Box>
      </Box >
    </Flex>
  )
}

export default LeftContainer
