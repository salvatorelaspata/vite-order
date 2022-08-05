import {
  AddIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";
import { DrawerMenu } from "./component/DrawerMenu";
import { FooterToolbar } from "./component/FootedToolbar";
import { HeaderToolbar } from "./component/HeaderToolbar";
import { Rooms } from "./pages/Rooms";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [[bgColorButton, colorButton], setButtonColor] = useState([]);
  const [[bgColorMain, colorMain], setMainColor] = useState([]);
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useLayoutEffect(() => {
    setButtonColor(
      [].concat([
        colorMode === "dark" ? "gray.200" : "blackAlpha.400",
        colorMode === "dark" ? "blackAlpha.800" : "blackAlpha.800",
      ])
    );
    setMainColor(
      [].concat([
        colorMode === "dark" ? "red.400" : "red.300",
        colorMode === "dark" ? "gray:700" : "gray:200",
      ])
    );
    console.log(colorMode);
  }, [colorMode]);
  // colorMode === "light" ? "" : ""
  return (
    <div className="App">
      <Flex direction={"column"} h="100vh">
        <HeaderToolbar
          leftContent={
            <Button
              ref={btnRef}
              bgColor={bgColorButton}
              color={colorButton}
              onClick={() => {
                setIsDrawerOpen();
                onOpen();
              }}
            >
              {!isDrawerOpen ? <HamburgerIcon /> : <CloseIcon />}
            </Button>
          }
          middleContent={<Heading>≤:🤓:≥</Heading>}
          rigthContent={
            <Button
              onClick={toggleColorMode}
              bgColor={bgColorButton}
              color={colorButton}
            >
              {useColorModeValue(<SunIcon />, <MoonIcon />)}
            </Button>
          }
        />
        <Flex color={colorMain} flex={1} p="10" backgroundColor={bgColorMain}>
          <Rooms />
        </Flex>
        <FooterToolbar
          rigthContent={
            <Button bgColor={"red.400"} color={"white"}>
              <AddIcon />
            </Button>
          }
        />
      </Flex>
      <DrawerMenu isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default App;
