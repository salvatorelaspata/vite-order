import {
  Box,
  Center,
  Flex,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ModalManage } from "../component/ModalManage";
import "./Rooms.css";
export const Rooms = () => {
  const onClickRect = function (oEvn) {
    const { style, tagName } = oEvn.target;
    if (tagName !== "P") {
      debugger;
      style.backgroundColor = "red";
    } else {
      oEvn.target.parentElement.style.backgroundColor = "red";
    }

    onOpen();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalManage isOpen={isOpen} onClose={onClose} />
      <VStack width={"100%"}>
        {/* <rect width={100} height={100} x={10} y={10} /> */}
        {/* <svg width="100%" height="100%">
        {Array.from(Array(7).keys()).map((c) => {
          return c !== 0 && <circle key={c} cx={c * 200} cy={50} r={50} />;
        })}
      </svg> */}

        <SimpleGrid
          minChildWidth="120px"
          spacing="40px"
          width="100%"
          direction={"row"}
          justify={"space-between"}
        >
          {/* <rect width={100} height={100} x={10} y={10} /> */}
          {Array.from(Array(7).keys()).map((c) => {
            return (
              <Center onClick={onClickRect} key={c} className="circle">
                <Text color="white">{c + 1}</Text>
              </Center>
            );
          })}
        </SimpleGrid>
        <SimpleGrid
          paddingTop={16}
          minChildWidth="120px"
          spacing="40px"
          width="100%"
          direction={"row"}
          justify={"space-between"}
        >
          {/* <rect width={100} height={100} x={10} y={10} /> */}
          {Array.from(Array(10).keys()).map((c) => {
            return (
              <Center
                zIndex={2}
                onClick={onClickRect}
                key={c}
                className="rectangle"
              >
                <Text zIndex={1} color="white">
                  {c + 8}
                </Text>
              </Center>
            );
          })}
        </SimpleGrid>
      </VStack>
    </>
  );
};
