import { Box, Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TbSend } from 'react-icons/tb'
import { FaRegSmileBeam } from 'react-icons/fa'
import { AiOutlinePaperClip } from 'react-icons/ai'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMassage } from '../../redux/reducerMassage'
import EmojiPicker from 'emoji-picker-react';


const RightInput = ({arr, ele }) => {
    
    const dispatch = useDispatch();
    
    const [Inp, setInp] = useState('');
    const handleInp = () => {
        arr.push(Inp) ;
        let newInput = {
            messageType: "TEXT",
            senderID: "0",
            text: [...arr],
            addedOn: "12:00 PM",
            lastText: Inp,
            lastTextTime: "12:58 PM"
        }
        axios.put(`https://whatsapp-database.onrender.com/massage/${ele.id}`, newInput)
        .then(()=>dispatch(getAllMassage()))
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    const [emo,setEmo] = useState(false) ;
    const handleEmoji=()=>{
        if(emo == false){
            setEmo(true) ;
        }
    }
    const onEmojiClick =(event,emojiObject)=>{
        setInp(Inp=>Inp+emojiObject.emoji) ;
        setEmo(false) ;
    }
    return (
        <Box >
            <Stack px={5} py={15} position={"absolute"} bottom={0} w={"76.5%"} bg={"#f0f2f5"}>
                <InputGroup fontSize={25} >
                    <Flex m={"auto"} px={2}>
                        <Box mx={5}>
                            <FaRegSmileBeam onClick={()=>handleEmoji()} cursor={'pointer'}/>
                            {emo?<Box position={'absolute'} bottom={'50px'}left={0}><EmojiPicker width={'266%'} onEmojiClick={onEmojiClick} /></Box>:""}
                            </Box>
                        <AiOutlinePaperClip />
                    </Flex>
                    <Input type="text" placeholder='Type a message' mx={5} bg={"white"} onChange={(e) => setInp(e.target.value)} />
                    <Box m={"auto"} px={2} cursor={'pointer'} onClick={handleInp} >
                        <TbSend  />
                    </Box>
                </InputGroup >
            </Stack>
        </Box>
    )
}

export default RightInput
