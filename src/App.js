import { Box, Flex } from "@chakra-ui/react";
import LeftContainer from "./Components/LeftContainer/LeftContainer";
import RightContainer from "./Components/RightContainer/RightContainer";

function App() {
  return (
   <Flex h={"100vh"}>
     <LeftContainer/>
     <RightContainer/>
   </Flex>
  );
}

export default App;
