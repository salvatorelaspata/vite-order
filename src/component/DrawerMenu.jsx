import { ArrowRightIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
const menu = [
  { id: "1", testo: "💰 Ordini Aperti", name: "ordiniAPER" },
  { id: "2", testo: "🏬 Magazzino", name: "ordiniAPER" },
  { id: "3", testo: "👉 Gestisci ordini", name: "ordiniAPER" },
];
export const DrawerMenu = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>🍔 🫥 Menu</DrawerHeader>
        <DrawerBody>
          <VStack>
            <Input
              aria-label="Ricerca"
              placeholder="Ricerca... 👀"
              focusBorderColor="red.200"
              borderColor={"red.200"}
            />
            {menu.map(({ id, testo, name }) => (
              <Flex
                key={id}
                borderWidth={"thin"}
                rounded="2xl"
                p={5}
                justify={"space-between"}
                verticalAlign={"middle"}
                w="100%"
                h="16"
              >
                <Center>
                  <Heading size="md">{testo}</Heading>
                </Center>
                <Center>
                  <ArrowRightIcon />
                </Center>
              </Flex>
            ))}
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme="red" variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
