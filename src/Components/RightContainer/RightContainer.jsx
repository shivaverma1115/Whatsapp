import React from 'react'
import UserHeader from './UserHeader'
import { Box } from '@chakra-ui/react'
import RightInput from './RightInput'
import ChatSection from './ChatSection'

const RightContainer = () => {
  return (
    <Box width={"70%"}>
      <UserHeader/>
      <ChatSection/>
      <RightInput/>
    </Box>
  )
}

export default RightContainer
