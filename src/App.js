import { Box, Flex, Image } from "@chakra-ui/react";
import LeftContainer from "./Components/LeftContainer/LeftContainer";
import RightContainer from "./Components/RightContainer/RightContainer";
import { useState } from "react";
import Img from "./Photo/1.jpg"

function App() {
  const [toggel, setToggle] = useState(false);
  return (
    <Box >
      <Flex >
        <LeftContainer setToggle={setToggle}/>
        {toggel ? <RightContainer /> :<Image src={Img} w={'100%'}h={'100vh'}/>}
      </Flex>
    </Box>
  );
}

export default App;
