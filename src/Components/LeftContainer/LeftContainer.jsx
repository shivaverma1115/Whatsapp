import React, { useEffect, useState } from 'react'
import Header from './Header';
import InputSec from './InputSec';
import { Box, Flex } from '@chakra-ui/react';
import UserDiv from './UserDiv';
import axios from "axios" ;
const LeftContainer = () => {
  const [contactList,setContactList] = useState([]) ;
 const getData = () => {
    axios.get("https://whatsapp-database.onrender.com/contactList")
      .then((res) => {
        // console.log(res.data);
        setContactList(res.data) ;
      })
      .catch((error) => {
        // console.log(error);
      });
  }
  const name = JSON.parse((localStorage.getItem("userName"))) ;
  useEffect(() => {
    getData();
  }, [name])
  localStorage.setItem("contactList",JSON.stringify(contactList)) ;


  return (
    <Flex width={"30%"} >
      <Box overflow={"auto"} w={"100%"}>
        <Box position={'sticky'}top={0} bg={'white'}py={2}>
          <Header />
          <InputSec />
        </Box>
        <Box>
          {
            contactList.map((ele,i) =>
              <UserDiv key={i} ele={ele.id} lastText={ele.lastText}lastTextTime={ele.lastTextTime}name={ele.name}profilePic={ele.profilePic}/>
            )
          }
        </Box>
      </Box >
    </Flex>
  )
}

export default LeftContainer

