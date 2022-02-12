import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
export default function Hero() {
  return (
    <Box bg="primary-light" py="24">
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "12", lg: "32" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack
            w={{ base: "100%", lg: "40%" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            justifyContent="center"
            spacing="7"
          >
            <HStack spacing="3">
              <Text
                as="span"
                textTransform="uppercase"
                fontWeight="bold"
                color="primary"
              >
                Let's get started
              </Text>
              <Box
                w="12"
                h="0.5"
                bg="primary"
                display={{ base: "none", lg: "block" }}
              />
            </HStack>
            <Heading
              as="h2"
              fontSize="5xl"
              fontWeight="extrabold"
              textTransform="capitalize"
              textAlign={{ base: "center", lg: "left" }}
            >
              We make{" "}
              <Text as="span" color="primary">
                travel
              </Text>{" "}
              easy
            </Heading>
            <Text
              fontSize="sm"
              color="GrayText"
              fontWeight="medium"
              lineHeight="6"
              textAlign={{ base: "center", lg: "left" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, minima quod! Amet fugit optio officia vero repellat
              illum minus, ab obcaecati, animi ipsa ex fugiat sint ut numquam
              temporibus nihil!
            </Text>
            <Link
              href="/"
              bg="primary"
              color="white"
              px="12"
              py="3"
              fontWeight="semibold"
              borderRadius="full"
              borderWidth="2px"
              borderColor="primary"
              _hover={{
                textDecoration: "none",
                bg: "transparent",
                color: "primary",
              }}
            >
              Get Started
            </Link>
          </VStack>
          <Box w={{ base: "100%", md: "65%", lg: "50%" }} p="8">
            <Image src="/images/hero.svg" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
