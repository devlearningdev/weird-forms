import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";

const devs = [
  {
    name: "John",
    avatar: "../avatar1.png",
    job: "Graphist",
  },
  {
    name: "Eric",
    avatar: "../avatar2.png",
    job: "Blockchain Developer",
  },
  {
    name: "Patricia",
    avatar: "../avatar4.png",
    job: "Marketing",
  },
  {
    name: "Elon",
    avatar: "../avatar3.png",
    job: "CEO",
  },
];

const displayDevs = devs.map((item) => (
  <Center py={12}>
    <Box
      role={"group"}
      p={6}
      maxW={"250px"}
      w={"full"}
      bg="white"
      _dark={{ bg: "gray.900" }}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 1,
          left: 0,
          backgroundImage: `url(${item.avatar})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={item.avatar}
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          {item.job}
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          {item.name}
        </Heading>
      </Stack>
    </Box>
  </Center>
));

export default function Team() {
  return (
    <Flex
      _dark={{ bg: "black" }}
      align="center"
      direction="column"
      pt="5rem"
      pb="5rem"
    >
      <Heading mb="1rem">Our Team</Heading>
      <Flex wrap="wrap" gap="2rem" justify="center">
        {displayDevs}
      </Flex>
    </Flex>
  );
}
