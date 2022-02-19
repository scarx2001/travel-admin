import {
  Box,
  Container,
  Heading,
  HStack,
  Button,
  Image,
  Stack,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack alignItems={{ base: "center", md: "flex-start" }}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg="primary"
        boxShadow="md"
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight="extrabold" fontSize={{ base: "lg", lg: "xl" }}>
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function WhatCanWeDo() {
  return (
    <>
      <Box
        bg="white"
        pt="24"
        pb={11}
        bgImage="url(/images/map.svg)"
        bgRepeat="no-repeat"
        bgSize="50%"
        bgPosition="50% 10%"
      >
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

            <SimpleGrid
              spacingY={5}
              columns={{ base: 2, md: 4, lg: 7 }}
              alignItems="center"
              justifyContent="center"
              maxW="container.lg"
            >
              <HStack>
                <Image w={35} src="/images/usa.svg" />
                <Text>Usa</Text>
              </HStack>
              <HStack>
                <Image w={35} src="/images/canada.svg" />
                <Text>Canada</Text>
              </HStack>
              <HStack>
                <Image w={35} src="/images/united kingdom.svg" />
                <Text>United Kingdom</Text>
              </HStack>
              <HStack>
                <Image w={35} src="/images/spain.svg" />
                <Text>Span</Text>
              </HStack>
              <HStack>
                <Image w={35} src="/images/italy.svg" />
                <Text>Italy</Text>
              </HStack>
              <HStack>
                <Image w={35} src="/images/portugal.svg" />
                <Text>Portugal</Text>
              </HStack>
              <HStack>
                <Image w={35} src="/images/plus.svg" />
                <Text>More to Come</Text>
              </HStack>
            </SimpleGrid>
          </Stack>

          <Box py="24">
            <Container maxW="container.xl">
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacingX={{ base: "10", xl: "24" }}
                spacingY={{ base: "10", md: 16, xl: "24" }}
                alignItems={"center"}
              >
                <Feature
                  icon={<Icon as={FcAssistant} w={10} h={10} />}
                  title={"Lifetime Support"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                  }
                />
                <Feature
                  icon={<Icon as={FcDonate} w={10} h={10} />}
                  title={"Unlimited Donations"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                  }
                />
                <Feature
                  icon={<Icon as={FcInTransit} w={10} h={10} />}
                  title={"Instant Delivery"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                  }
                />
                <Feature
                  icon={<Icon as={FcAssistant} w={10} h={10} />}
                  title={"Lifetime Support"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                  }
                />
                <Feature
                  icon={<Icon as={FcDonate} w={10} h={10} />}
                  title={"Unlimited Donations"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                  }
                />
                <Feature
                  icon={<Icon as={FcInTransit} w={10} h={10} />}
                  title={"Instant Delivery"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                  }
                />
              </SimpleGrid>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}
