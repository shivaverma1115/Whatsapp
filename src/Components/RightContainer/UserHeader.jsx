import React from 'react'
import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineMore } from 'react-icons/ai';
import { AiOutlineSearch } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';

const UserHeader = ({ ele }) => {
  const avatar = JSON.parse(localStorage.getItem("avatar")) ;
  return (
    <Flex bg={'#f0f2f5'} >
      <Box mx={10} my={2}>
        <Flex >
          <Avatar m={"auto"} src={avatar} />
          <Text m={'auto'} px={5} fontWeight={700}>{ele.name}</Text>
        </Flex>
      </Box>
      <Spacer />
      <Flex m={"auto"} w={"50%"} px={5} fontSize={25} justifyContent={'right'}>
        <AiOutlineSearch />
        <AiOutlineMore />
      </Flex>
    </Flex>
  )
}

export default UserHeader
