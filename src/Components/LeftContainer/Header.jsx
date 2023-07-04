import React from 'react'
import { Avatar, Box, Flex, Spacer } from "@chakra-ui/react";
import { MdGroups3 } from 'react-icons/md';
import { GoCircle } from 'react-icons/go';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { AiOutlineMore } from 'react-icons/ai';

const Header = () => {
  return (
    <Flex bg={'#f0f2f5'} >
      <Box mx={10} my={2}>
      <Avatar m={"auto"} src='https://pps.whatsapp.net/v/t61.24694-24/322278872_195464603182232_8418120309601235942_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS-l_srQi2-Buy7pvBWPIUrWJJk6RBNCLQg6sD7YoNH0g&oe=64AFA9CD'  />
      </Box>
      <Spacer/>
      <Flex m={"auto"}w={"50%"} fontSize={20}justifyContent={'space-around'}>
        <MdGroups3 />
        <GoCircle />
        <BsFillChatRightTextFill />
        <AiOutlineMore />
      </Flex>
    </Flex>
  )
}

export default Header
