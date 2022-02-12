import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
export default function Hero() {
  return (
    <Box bg="white" py="24" pb={11}>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column" }}
          spacing={{ base: "12", lg: "12" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="extrabold"
            textTransform="capitalize"
            textAlign={{ base: "center", lg: "left" }}
          >
            what can we do for you?
          </Heading>
          <HStack spacing="3" alignItems={"center"}>
            <Text
              as="span"
              direction={{ lg: "column" }}
              textTransform="uppercase"
              fontWeight="bold"
              color="primary"
              mt={-7}
            >
              With All the countries
            </Text>
          </HStack>

          <Stack spacing={4}>
            <HStack spacing={6} direction={"row"}>
              <Image w={35} src="/images/usa.svg" />
              <Text>Usa</Text>
              <Image w={35} src="/images/canada.svg" />
              <Text>Canada</Text>
              <Image w={35} src="/images/united kingdom.svg" />
              <Text>United Kingdom</Text>
              <Image w={35} src="/images/spain.svg" />
              <Text>Span</Text>
              <Image w={35} src="/images/italy.svg" />
              <Text>Italy</Text>
              <Image w={35} src="/images/portugal.svg" />
              <Text>Portugal</Text>
              <Image w={35} svg={"red"} src="/images/plus.svg" />
              <Text>More to Come</Text>
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
