import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  HStack,
  Flex,
  Text,
  useColorModeValue,
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

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("primary-light", "primary")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} mt={33} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr " }}
          spacing={8}
          mt={40}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              adipisci sunt similique voluptates odio, labore, nemo ad incidunt
              quam fugiat accusamus eius libero
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
            <Link href={"#"}>Concierge Services</Link>
            <Link href={"#"}>Car Rental</Link>
            <Link href={"#"}>Hotel/Flights Booking</Link>
            <Link href={"#"}>Online Visa Application</Link>
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
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.300")}
      ></Box>

      <Container
        as={Stack}
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
      </Container>
    </Box>
  );
}
