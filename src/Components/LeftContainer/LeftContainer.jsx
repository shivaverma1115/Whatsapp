import React, { useEffect, useState } from 'react'
import Header from './Header';
import InputSec from './InputSec';
import { Box, Flex } from '@chakra-ui/react';
import UserDiv from './UserDiv';
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../redux/reducer';
import { getAllMassage } from '../../redux/reducerMassage';
const LeftContainer = ({setToggle}) => {

// fatch the data ;
  const dispatch = useDispatch() ;
    const data = useSelector((state)=>{
        return state.redux.Contact.user ;
    }) ;
    useEffect(()=>{
        dispatch(getAllData()) ;
        dispatch(getAllMassage()) ;
    },[])

  return (
    <Flex width={"30%"}>
      <Box w={'100%'}>
        <Box position={'sticky'}top={0} bg={'white'}py={2}>
          <Header />
          <InputSec />
        </Box>
        <Box overflow={"auto"} h={'80vh'}>
          {
            data.map((ele,i)=>{
              return <UserDiv key={i}ele={ele} setToggle={setToggle}/>
            })
          }
        </Box>
      </Box >
    </Flex>
  )
}

export default LeftContainer

