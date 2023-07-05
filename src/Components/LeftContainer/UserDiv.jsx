import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {  useSelector } from 'react-redux'

const UserDiv = ({id,lastText,lastTextTime,name,profilePic,}) => {
    const userName=()=>{
        localStorage.setItem("userName",JSON.stringify(name)) ;
        console.log(name) ;
    }
    return (
        <Box _hover={{bg:"#f0f2f5"}}cursor={'pointer'} onClick={()=>userName()}>
            <Divider />
            <Flex h={20} justifyContent={"space-around"} >
                <Box my={"auto"} >
                    <Avatar m={"auto"} src={profilePic} />
                </Box>
                <Box textAlign={'left'} my={"auto"}>
                    <Text fontSize={20}>{name}</Text>
                    <Text>{lastText}</Text>
                </Box>
                <Text my={"auto"}>{lastTextTime}</Text>
            </Flex>
        </Box>
    )
}

export default UserDiv
