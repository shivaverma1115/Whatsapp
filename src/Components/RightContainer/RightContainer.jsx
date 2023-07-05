import React, { useEffect, useState } from 'react'
import UserHeader from './UserHeader'
import { Box } from '@chakra-ui/react'
import RightInput from './RightInput'
import ChatSection from './ChatSection'
import axios from 'axios'

const RightContainer = () => {
  const [massage, setMassage] = useState([]);
  const getData = () => {
    axios.get(`https://whatsapp-database.onrender.com/messagesList`)
      .then((res) => {
        //  console.log(res.data);
        setMassage(res.data);
      })
      .catch((error) => {
        //  console.log(error);
      });
  }
  const name = JSON.parse((localStorage.getItem("userName"))) ;
  useEffect(() => {
    getData();
  }, [name])
  localStorage.setItem("massage", JSON.stringify(massage));


  return (
    <Box width={"70%"}>
      <UserHeader />
      <ChatSection/>
      <RightInput />
    </Box>
  )
}

export default RightContainer
