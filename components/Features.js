import { Flex, Heading, Stack, Text, Center, Box } from "@chakra-ui/react";
import Head from "next/head";
import Cards from "./Cards";

export default function Features() {
  return (
    <Flex _dark={{ bgColor: "black" }}>
      <Cards />
    </Flex>
  );
}
