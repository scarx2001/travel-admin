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
    <Box bg="white" py="24">
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
            <Heading
              as="h2"
              fontSize="4xl"
              fontWeight="extrabold"
              textTransform="capitalize"
              textAlign={{ base: "center", lg: "left" }}
            >
              Who Are We
            </Heading>
            <HStack spacing="3">
              <Text
                as="span"
                textTransform="uppercase"
                fontWeight="bold"
                color="primary"
              >
                25 Years Of Experience
              </Text>
            </HStack>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae eveniet architecto ipsa odio sit assumenda eos!
              Accusantium, impedit blanditiis ea opt
              {"     "}
              <Text py={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                reiciendis nisi. Debitis non optio ipsa eligendi deleniti sunt
                necessitatibus id voluptatibus culpa eius ad
              </Text>{" "}
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
              Learn More
            </Link>
          </VStack>
          <Box w={{ base: "100%", md: "65%", lg: "50%" }} p="8">
            <Image src="/images/whoarewe.svg" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
