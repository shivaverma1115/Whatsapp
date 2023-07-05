import { Box, Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { TbSend } from 'react-icons/tb'
import { FaRegSmileBeam } from 'react-icons/fa'
import { AiOutlinePaperClip } from 'react-icons/ai'
import axios from 'axios'

const RightInput = () => {
    const [ Inp,setInp] = useState('') ;
    // console.log(Inp) ;
    const handleInp = () => {
        let newInput = {
            messageType: "TEXT",
            senderID: "0",
            addedOn: "12:00 PM",
            text: Inp
        }
        setInp('') ;
        axios
            .post(`https://whatsapp-database.onrender.com/messagesList`, newInput)
            .then((res) => console.log(res))
            .catch((err)=>console.log(err)) ;
    }
    return (
        <Stack px={5} py={15}spacing={4} position={"absolute"} bottom={0} w={"70%"} bg={"#f0f2f5"}>
            <InputGroup fontSize={25}>
                <Flex m={"auto"} px={2}>
                    <Box mx={5}><FaRegSmileBeam /></Box>
                    <AiOutlinePaperClip />
                </Flex>
                <Input type='tel'placeholder='Type a message' mx={5} bg={"white"} onChange={(e)=>setInp(e.target.value)} />
                <Box m={"auto"} px={2} cursor={'pointer'} onClick={handleInp}>
                    <TbSend />
                </Box>
            </InputGroup >
        </Stack>
    )
}

export default RightInput
