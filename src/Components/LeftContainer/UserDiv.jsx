import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../redux/reducer';
import { getAllMassage } from '../../redux/reducerMassage';

const UserDiv = ({ ele ,setToggle}) => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getAllData());
        dispatch(getAllMassage());
        localStorage.setItem("id", ele.id);
        localStorage.setItem("name", ele.name);
        setToggle(true) ;
    }
    const avatar = localStorage.setItem("avatar",JSON.stringify(ele.profilePic)) ;
    return (
        <Box bg={'white'} _hover={{ bg: "#f0f2f5" }} cursor={'pointer'}  onClick={() => handleClick()}>
            <Divider />
            <Flex h={20} justifyContent={"space-around"} >
                <Box my={"auto"} >
                    <Avatar m={"auto"} src={ele.profilePic} />
                </Box>
                <Box textAlign={'left'} my={"auto"}>
                    <Text fontSize={20}>{ele.name}</Text>
                    <Text >{ele.text}</Text>
                </Box>
                <Text my={"auto"}>{ele.lastTextTime}</Text>
            </Flex>
        </Box>
    )
}

export default UserDiv
