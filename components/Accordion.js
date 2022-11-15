import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Heading,
  Flex,
} from "@chakra-ui/react";

export default function AccordionMenu() {
  return (
    <Flex
      direction="column"
      align="center"
      gap="2rem"
      _dark={{ bgColor: "black" }}
    >
      <Heading as="h2" mt="5rem">
        FAQ
      </Heading>
      <Accordion allowToggle w="100%" maxW="6xl">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="center" fontSize="xl">
                What is the supply ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            color="gray.400"
            _light={{ color: "gray.500" }}
            fontSize="lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="center" fontSize="xl">
                Mint is over, how can I buy a Weird Form ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            color="gray.400"
            _light={{ color: "gray.500" }}
            fontSize="lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="center" fontSize="xl">
                How much does one of those beautiful Weird Form cost?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            color="gray.400"
            _light={{ color: "gray.500" }}
            fontSize="lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
