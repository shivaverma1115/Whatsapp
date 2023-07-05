import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Chats from './Chats'

const ChatSection = () => {
    const contactList = JSON.parse((localStorage.getItem("contactList"))) ;
    console.log(contactList) ;
    return (
        <Box overflow={'auto'} px={10} py={5} h={"90vh"} bgImage={`https://miro.medium.com/v2/resize:fit:1400/0*YDe-yiYmb4Dxe7KZ`}>
            {
                contactList.map((ele,i)=>{
                    return <Chats key={i}ele={ele}/>
                })
            }
        </Box>
    )
}

export default ChatSection
