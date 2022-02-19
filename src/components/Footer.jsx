import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  HStack,
  Image,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
const Logo = () => {
  return (
    <Text
      //   textAlign={useBreakpointValue({ base: "center", md: "left" })}
      fontFamily={"heading"}
      fontSize={"30"}
      color={useColorModeValue("gray.800", "white")}
    >
      Logo
    </Text>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const TravelCard = () => {
  return (
    <Box
      borderRadius="2xl"
      bg="primary"
      py={12}
      px={12}
      color="white"
      maxW={{ base: "container.sm", lg: "container.lg" }}
      w="95%"
      mx="auto"
      mb={-44}
      position="relative"
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ base: 8, lg: 0 }}
      >
        <Image w={{ base: 44, lg: "60" }} src="/images/travel.svg"></Image>
        <VStack
          alignItems={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Text>Let's Get Started</Text>
          <Heading fontSize={"2rem"}>Exploring the World</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing</Text>
        </VStack>
        <Link
          href="/"
          bg="white"
          color="primary"
          position="relative"
          fontWeight="semibold"
          fontSize="15px"
          borderRadius="full"
          borderWidth="10px"
          px="20px"
          borderColor="white"
        >
          start travel
        </Link>
      </Stack>
    </Box>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <>
      <TravelCard />

      <Box
        bg={useColorModeValue("primary-light", "primary")}
        color={useColorModeValue("gray.700", "gray.200")}
        borderTopRadius="95%150px"
      >
        <Container as={Stack} maxW="container.xl" pt={72} pb={12}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr " }}
            spacing={8}
            mb={40}
          >
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue("gray.700", "white")} />
              </Box>
              <Text fontSize={"sm"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores adipisci sunt similique voluptates odio, labore, nemo ad
                incidunt quam fugiat accusamus eius libero
              </Text>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>QUICK LINKS</ListHeader>
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>Sercives & Pricing</Link>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Login</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>SERVICES</ListHeader>
              <Link href={"#"} fontSize="sm">
                Concierge Services
              </Link>
              <Link href={"#"} fontSize="sm">
                Car Rental
              </Link>
              <Link href={"#"} fontSize="sm">
                Hotel/Flights Booking
              </Link>
              <Link href={"#"} fontSize="sm">
                Online Visa Application
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>CONTACT INFO</ListHeader>
              <Link href={"#"}>Jonquiere, 84150</Link>
              <Link href={"#"}>
                {" "}
                <EmailIcon />
                Info@gmail.com
              </Link>
            </Stack>
          </SimpleGrid>

          <Box border="1px" borderColor={useColorModeValue("gray.300")}></Box>

          <Stack
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>2022 Copyright. All Right Reserved</Text>
            <HStack align={"flex-start"}>
              <Link href={"#"}>Terms |</Link>
              <Link href={"#"}>Privacy |</Link>
              <Link href={"#"}>Contact</Link>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
