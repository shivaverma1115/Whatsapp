import { Box, Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { BsFillMicFill } from 'react-icons/bs'
import { FaRegSmileBeam } from 'react-icons/fa'
import { AiOutlinePaperClip } from 'react-icons/ai'

const RightInput = () => {
    return (
        <Stack px={5} py={15}spacing={4} position={"absolute"} bottom={0} w={"70%"} bg={"#f0f2f5"}>
            <InputGroup fontSize={25}>
                <Flex m={"auto"} px={2}>
                    <Box mx={5}><FaRegSmileBeam /></Box>
                    <AiOutlinePaperClip />
                </Flex>
                <Input type='tel' placeholder='Type a message' mx={5} bg={"white"} />
                <Box m={"auto"} px={2}>
                    <BsFillMicFill />
                </Box>
            </InputGroup >
        </Stack>
    )
}

export default RightInput
