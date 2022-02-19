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

const Service = ({ title, description, icon }) => {
  return (
    <VStack
      borderTop={"4px"}
      borderTopColor={"primary"}
      borderRadius="md"
      bg="white"
      boxShadow="md"
      p={8}
      spacing={4}
      alignItems="flex-start"
    >
      <Image w={10} h={10} src={icon} />
      <Text fontSize={15} fontWeight="extrabold" textTransform="capitalize">
        {title}
      </Text>
      <Text fontSize="sm" fontWeight="medium" color="gray.400">
        {description}
      </Text>
    </VStack>
  );
};

export default function WhyChoosUs() {
  return (
    <Box bg="primary-light" py="24">
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "0", lg: "32" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            w={{ base: "100%", md: "75%" }}
            order={{ base: 2, lg: 1 }}
            mt={{ base: 24, lg: 0 }}
          >
            <Image src="/images/phon.svg" />
          </Box>
          <VStack
            alignItems="flex-start"
            spacing={10}
            order={{ base: 1, lg: 2 }}
          >
            <VStack alignItems="flex-start">
              <Heading
                as="h2"
                fontSize="3xl"
                fontWeight="extrabold"
                textTransform="capitalize"
                textAlign={{ base: "center", lg: "left" }}
              >
                why choose us!
              </Heading>
              <Text fontSize="sm" fontWeight="medium" color="GrayText">
                Lorem ipsum dolor sit amet
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              <Service
                title="travel assistance"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                icon="/images/headphons.svg"
              />
              <Service
                title="booking platform"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                icon="/images/booking.svg"
              />
              <Service
                title="travel documentations"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                icon="/images/documentation.svg"
              />
              <Service
                title="admin support"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                icon="/images/support.svg"
              />
            </SimpleGrid>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
