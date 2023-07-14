import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Chats from './Chats'
import { useSelector } from 'react-redux';
import RightInput from './RightInput';

const ChatSection = () => {

    const data = useSelector((state) => {
        return state.redux.Massage.user;
    });
     
    var arr = [] ;
    
    const id = JSON.parse(localStorage.getItem("id"));
    return (
        <Box overflow={'auto'} h={"92vh"} bgImage={`https://miro.medium.com/v2/resize:fit:1400/0*YDe-yiYmb4Dxe7KZ`}>
            {
                data.map((ele, i) => {
                    if (id == ele.id) {
                        return (
                            <Box key={i}>
                                <Chats ele={ele} />
                                <RightInput arr={arr} ele={ele}/>
                            </Box>
                        )
                    }
                })
            }
        </Box>
    )
}

export default ChatSection
