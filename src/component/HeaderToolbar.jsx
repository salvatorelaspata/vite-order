import { Box, Center, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const HeaderToolbar = ({ leftContent, middleContent, rigthContent }) => {
  const bg = useColorModeValue("red.200", "gray.700");
  const color = useColorModeValue("gray.800", "red.200");
  return (
    <Flex
      verticalAlign={"middle"}
      justify={"space-between"}
      h="16"
      p="3"
      backgroundColor={bg}
      color={color}
    >
      <Center>{leftContent || <Text>leftContent</Text>}</Center>
      <Center>{middleContent || <Text>middleContent</Text>}</Center>
      <Center>{rigthContent || <Text>rigthContent</Text>}</Center>
    </Flex>
  );
};
