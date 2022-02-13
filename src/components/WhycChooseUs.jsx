import {
  Box,
  Icon,
  Container,
  SimpleGrid,
  Heading,
  HStack,
  Image,
  Text,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
export default function WhyChoosUs() {
  return (
    <Box bg="primary-light" py="24">
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "12", lg: "32" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box w={{ base: "100%", md: "65%", lg: "50%" }} p="8">
            <Image src="/images/phon.svg" />
          </Box>
          <VStack>
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="extrabold"
              textTransform="capitalize"
              textAlign={{ base: "center", lg: "left" }}
              pr="13rem"
            >
              why choose us!
            </Heading>
            <HStack pr="13rem" spacing="3">
              <Text>Lorem ipsum dolor sit amet</Text>
            </HStack>
            <SimpleGrid columns={2} spacing="44px" spacingY="22px">
              <Box
                borderTop={"4px"}
                borderTopColor={"primary"}
                borderRadius={"5%"}
                bg="white"
                w="200px"
                height="200px"
                boxShadow="lg"
              >
                <Image
                  ml={5}
                  mt={5}
                  w={10}
                  h={10}
                  src="/images/headphons.svg"
                />
                <Text p={3} fontSize={15} fontWeight={"bold"} mt={4}>
                  travel assistance
                </Text>
                <Text fontSize={13} px={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>
              <Box
                borderTop={"4px"}
                borderTopColor={"primary"}
                borderRadius={"5%"}
                bg="white"
                w="200px"
                height="200px"
                boxShadow="lg"
              >
                <Image ml={5} mt={5} w={10} h={10} src="/images/booking.svg" />
                <Text p={3} fontSize={15} fontWeight={"bold"} mt={4}>
                  booking platform
                </Text>
                <Text fontSize={13} px={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>
              <Box
                borderTop={"4px"}
                borderTopColor={"primary"}
                borderRadius={"5%"}
                bg="white"
                w="200px"
                height="200px"
                boxShadow="lg"
              >
                <Image
                  ml={5}
                  mt={5}
                  w={10}
                  h={10}
                  src="/images/documentation.svg"
                />
                <Text p={3} fontSize={15} fontWeight={"bold"}>
                  travel documentations
                </Text>
                <Text fontSize={13} px={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>
              <Box
                borderTop={"4px"}
                borderTopColor={"primary"}
                borderRadius={"5%"}
                bg="white"
                w="200px"
                height="200px"
              >
                <Image ml={5} mt={5} w={10} h={10} src="/images/support.svg" />
                <Text p={3} fontSize={15} fontWeight={"bold"} mt={4}>
                  admin support
                </Text>
                <Text fontSize={13} px={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
