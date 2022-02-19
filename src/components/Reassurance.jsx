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
  IconButton,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

export default function Reassurance() {
  return (
    <Box bg="white" py="24">
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "12", lg: "2" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box w={{ base: "100%", md: "65%", lg: "40%" }} pl="8">
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="extrabold"
              textTransform="capitalize"
              textAlign={{ base: "center", lg: "left" }}
              pl="3rem"
              mb="10rem"
            >
              Reassurance
            </Heading>
            <Text
              fontSize="15px"
              position={"relative"}
              left="30px"
              bottom="10rem"
            >
              Lorem, ipsum dolor sit amet
            </Text>
          </Box>
          <Box position={"relative"} top="7rem" left="-24rem">
            <IconButton
              aria-label="left-arrow"
              color="primary"
              borderRadius="full"
              position="absolute"
              left={2}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              bg="primary"
              color="white"
              borderRadius="full"
              position="absolute"
              left={"4rem"}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt />
            </IconButton>
          </Box>
          {/* Slider */}
          <HStack>
            <SimpleGrid
              direction={{ base: "column", lg: "row" }}
              mr={150}
              columns={2}
              spacingX="80px"
              spacingY="22px"
            >
              <Box
                borderTop={"4px"}
                borderTopColor={"primary"}
                borderRadius={"5%"}
                bg="white"
                w="300px"
                height="250px"
                boxShadow="lg"
                p={8}
              >
                <VStack
                  justifyContent="center"
                  alignItems="center"
                  h="full"
                  spacing={5}
                >
                  <Image w={7} h={7} src="/images/like.svg" />
                  <Text textAlign="center" fontSize={13}>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                  </Text>
                  <VStack spacing={0}>
                    <Text fontSize={15} fontWeight={"bold"}>
                      john albert
                    </Text>
                    <HStack spacing={0.5}>
                      <Icon as={BsStarFill} w={3} h={3} color="primary" />
                      <Icon as={BsStarFill} w={3} h={3} color="primary" />
                      <Icon as={BsStarFill} w={3} h={3} color="primary" />
                      <Icon as={BsStarFill} w={3} h={3} color="primary" />
                      <Icon as={BsStarFill} w={3} h={3} color="primary" />
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
              <Box
                borderTop={"4px"}
                borderTopColor={"primary"}
                borderRadius={"5%"}
                bg="white"
                w="300px"
                height="250px"
                boxShadow="lg"
              >
                <Image
                  position="relative"
                  left="8rem"
                  top="1rem"
                  w={7}
                  h={7}
                  src="/images/like.svg"
                />

                <Text
                  textAlign="center"
                  fontSize={13}
                  position="relative"
                  top="3rem"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Text
                  position="relative"
                  top="5rem"
                  left="7rem"
                  fontSize={15}
                  fontWeight={"bold"}
                >
                  john albert
                </Text>
                <Image
                  position="relative"
                  top="5rem"
                  left="8rem"
                  w="3rem"
                  h="3rem"
                  src="/images/rating.svg"
                ></Image>
              </Box>
            </SimpleGrid>
          </HStack>
        </Stack>
      </Container>
      <Box
        w="85%"
        border="1px"
        color="gray.400"
        position="relative"
        top="10rem"
        left="6rem"
        mb="10rem"
      ></Box>
    </Box>
  );
}
