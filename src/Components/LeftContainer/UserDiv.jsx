import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const UserDiv = () => {
    return (
        <Box _hover={{bg:"#f0f2f5"}}>
            <Divider />
            <Flex h={20} justifyContent={"space-around"} >
                <Box my={"auto"} >
                    <Avatar m={"auto"} src='https://pps.whatsapp.net/v/t61.24694-24/322278872_195464603182232_8418120309601235942_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS-l_srQi2-Buy7pvBWPIUrWJJk6RBNCLQg6sD7YoNH0g&oe=64AFA9CD' />
                </Box>
                <Box textAlign={'left'} >
                    <Text fontSize={25}>Shiva Verma</Text>
                    <Text>mst bn rha h</Text>
                </Box>
                <Text >12:00 Pm</Text>
            </Flex>
        </Box>
    )
}

export default UserDiv
