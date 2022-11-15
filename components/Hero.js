import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  Button,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"95vh"}
      backgroundImage={"../double-helix.png"}
      backgroundSize={"contain"}
      backgroundPosition={"left center"}
      backgroundRepeat="no-repeat"
      pl="2rem"
      pr="2rem"
      _dark={{ bgColor: "black" }}
    >
      <Flex w="100%" align="center" justify="center">
        <Stack maxW="4xl">
          <Heading
            as="h1"
            size="4xl"
            textShadow="0px 0px 60px"
            _light={{
              textShadow: "0px 0px 60px #c987d3",
            }}
          >
            Weird Forms NFT Collection !
          </Heading>
          <br />
          <Text fontSize="2xl" color="white" _light={{ color: "gray.700" }}>
            Tempor labore nisi voluptate aute Lorem tempor amet. Ea non elit et
            tempor minim mollit quis consectetur pariatur elit ut enim non
            proident.
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
