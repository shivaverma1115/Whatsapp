import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineAlignCenter } from 'react-icons/ai';
const InputSec = () => {
    return (
        <Stack spacing={4}m={5}>
            <InputGroup >
                <InputLeftElement pointerEvents='none'mx={5} bg={"#f0f2f5"}>
                    <AiOutlineSearch color='gray.300' fontSize={20} />
                </InputLeftElement>
                <Input type='tel' placeholder='Search or start new chat' mx={5}bg={"#f0f2f5"}/>
                <Box m={"auto"} px={2}>
                    <AiOutlineAlignCenter fontSize={20} />
                </Box>
            </InputGroup >
        </Stack>
    )
}

export default InputSec
