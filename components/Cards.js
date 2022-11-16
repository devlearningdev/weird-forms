import {
  Flex,
  Heading,
  Stack,
  Text,
  Center,
  Box,
  Image,
  Divider,
  Button,
} from "@chakra-ui/react";

import React from "react";
import { motion } from "framer-motion";

export default function Cards() {
  const nfts = [
    {
      id: 1,
      img: "./cloud-ball.png",
      background:
        "linear-gradient(180deg, rgba(90,221,248,1) 0%, rgba(223,0,255,1) 100%)",
      boxShadow: "1px 1px 10px 2px rgba(223,0,255,1)",
      hoverBoxShadow: "1px 1px 20px 5px rgba(223,0,255,1)",
      border: "thick double rgba(223,0,255,1)",
    },
    {
      id: 2,
      img: "./flower-ball.png",
      background:
        "linear-gradient(180deg, rgba(90,221,248,1) 0%, rgba(10,13,198,1) 100%)",
      boxShadow: "1px 1px 10px 2px rgba(10,13,198,1)",
      hoverBoxShadow: "1px 1px 20px 5px rgba(10,13,198,1)",
      border: "thick double rgba(10,13,198,1)",
    },
    {
      id: 3,
      img: "./crushed-paper-ball.png",
      background:
        "linear-gradient(180deg, rgba(248,156,90,1) 0%, rgba(255,196,0,1) 100%)",
      boxShadow: "1px 1px 10px 2px rgba(255,196,0,1)",
      hoverBoxShadow: "1px 1px 20px 5px rgba(255,196,0,1)",
      border: "thick double rgba(255,196,0,1)",
    },
    {
      id: 4,
      img: "./diamond.png",
      background:
        "linear-gradient(180deg, rgba(254,161,255,1) 0%, rgba(100,49,168,1) 100%)",
      boxShadow: "1px 1px 10px 2px rgba(100,49,168,1)",
      hoverBoxShadow: "1px 1px 20px 5px rgba(100,49,168,1)",
      border: "thick double rgba(100,49,168,1)",
    },
  ];

  const displayNfts = nfts.map((item) => (
    <motion.div
      animate={{ x: [0, 10, -10, 0], y: [0, 10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        type: "spring",
      }}
    >
      <Flex
        backgroundImage="./frame2a.png"
        backgroundPosition="center center"
        backgroundSize={"contain"}
        backgroundRepeat="no-repeat"
        w="350px"
        h="430px"
        align="center"
        justify="center"
        key={item.id}
      >
        <Flex
          w="220px"
          h="330px"
          bg={item.background}
          justify="center"
          align="center"
          rounded="10px"
          boxShadow={item.boxShadow}
          border={item.border}
          _hover={{ boxShadow: item.hoverBoxShadow }}
        >
          <Image src={item.img} boxSize="200px"></Image>
        </Flex>
      </Flex>
    </motion.div>
  ));

  return (
    <Center gap="5rem" w="full" flexDirection="column" mt="5rem">
      <Stack spacing={10} align="center">
        <Heading as="h2" size="xl" textAlign="center" textShadow="0px 0px 80px">
          About the collection.
        </Heading>
        <Text
          maxW="6xl"
          pr="2rem"
          pl="2rem"
          color="gray.400"
          _light={{ color: "gray.500" }}
          fontSize="xl"
        >
          Voluptate ad reprehenderit esse nisi. Officia ut et quis ipsum
          excepteur qui fugiat duis in irure sit nulla. Do dolore culpa eu quis
          mollit eu qui voluptate dolore cupidatat eu. Fugiat esse proident
          laboris est. Sint dolor officia non in aliqua deserunt id consequat ad
          id tempor minim nulla. Incididunt officia ex aliquip deserunt
          adipisicing mollit officia ut incididunt veniam magna tempor. Labore
          esse ex irure eu in non pariatur esse in. Deserunt commodo sit
          pariatur velit eiusmod nulla eu in esse. In occaecat anim nulla
          occaecat.
        </Text>
        <Button
          size="md"
          colorScheme="teal"
          bg="linear-gradient(90deg, rgba(0, 143, 212, 1) 0%, rgba(238, 130, 238, 1) 100%)"
          _hover={{
            bg: "#ffc400",
            boxShadow: "0px 0px 20px 0px gray",
          }}
        >
          Learn More{" "}
        </Button>
      </Stack>
      <Flex gap="2rem" w="full" wrap="wrap" justify="center">
        {displayNfts}
      </Flex>
    </Center>
  );
}
