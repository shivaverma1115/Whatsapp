import React, { useEffect, useReducer, useState } from 'react'
import UserHeader from './UserHeader'
import { Box } from '@chakra-ui/react'
import RightInput from './RightInput'
import ChatSection from './ChatSection'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const RightContainer = () => {

  const data = useSelector((state) => {
    return state.redux.Massage.user;
  });

  
  const id = JSON.parse(localStorage.getItem("id"));

  return (
    <Box width={"100%"} >
      {
        data.map((ele, i) => {
          if (id == ele.id) {
            return (
            <Box key={i}>
              <UserHeader ele={ele}/>
              <ChatSection />
            </Box>
            )
          }
        })
      }
    </Box>
  )
}
export default RightContainer
