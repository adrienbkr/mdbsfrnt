import * as React from "react";
import { Box, Flex, useColorModeValue as mode, HStack } from "@chakra-ui/react";
import { MobileMenuButton } from "./../Molecules/MobileMenuButton";
import { useMobileMenuState } from "../../hooks/useMobileMenuState";

interface LPrivateProps {
  head: React.ReactChild;
  sidebar: React.ReactChild;
  menu: React.ReactChild;
  actions: React.ReactChild;
  breadcrumb: React.ReactChild;
  children: React.ReactChild;
}

export const LPrivate = ({
  children,
  head,
  sidebar,
  menu,
  actions,
  breadcrumb,
}: LPrivateProps) => {
  const { isOpen, toggle, isMobile } = useMobileMenuState();
  return (
    <Flex
      height="100vh"
      bg={mode(isOpen || !isMobile ? "dust.100" : "dust.900", "gray.800")}
      overflow="hidden"
      sx={{ "--sidebar-width": "16rem" }}
      transition="background 0.6s ease"
      willChange="background"
    >
      {/* sidebar */}
      <Box
        as="nav"
        display="block"
        flex="1"
        width="var(--sidebar-width)"
        left="0"
        py="5"
        px="3"
        color="dust.900"
        position="fixed"
        opacity={isOpen || !isMobile ? 1 : 0}
        transition="opacity 0.9s ease"
        willChange="opacity"
      >
        {sidebar}
      </Box>
      {/* shell */}
      <Box
        flex="1"
        p={{ base: "0", md: "6" }}
        marginStart={{ md: "var(--sidebar-width)" }}
        position="relative"
        left={isOpen ? "var(--sidebar-width)" : "0"}
        transform={isOpen && isMobile ? "scale(0.9)" : "none"}
        willChange="left, transform"
        transition={
          isOpen && isMobile
            ? "0.6s cubic-bezier(0.57,-0.16, 0.4, 1.39)"
            : "0.3s ease"
        }
      >
        <Box
          bg={mode("dust.50", "gray.700")}
          borderColor={mode("dust.200", "gray.700")}
          borderWidth={1}
          height="100%"
          rounded="lg"
          shadow={isOpen ? "xl" : "none"}
          transition={"box-shadow 0.6s ease"}
        >
          <Flex direction="column" height="full" overflow="auto">
            {/* breadcrumb */}
            <Flex
              display={{ base: "none", md: "initial" }}
              px={{ base: "2", md: "8" }}
              py="2"
              pt="4"
              align="center"
            >
              {breadcrumb}
            </Flex>

            {/* head */}
            <Flex
              px={{ base: "2", md: "8" }}
              py="2"
              position="sticky"
              top="0"
              align="center"
              direction={{ base: "column", md: "row" }}
            >
              <Flex w="full">
                <MobileMenuButton onClick={toggle} isOpen={isOpen} />
                {head}
              </Flex>

              {/* menu */}
              <Flex w="full">{menu}</Flex>
            </Flex>

            {/* actions */}
            <Flex px={{ base: "2", md: "8" }} py="2" direction="row">
              <HStack spacing={4}>
                <Box h="4em" lineHeight="4em" px="1em" bg="white" rounded="8">Metric 1</Box>
                <Box h="4em" lineHeight="4em" px="1em" bg="white" rounded="8">Metric 2</Box>
                <Box h="4em" lineHeight="4em" px="1em" bg="white" rounded="8">Metric 3</Box>
                <Box h="4em" lineHeight="4em" px="1em" bg="white" rounded="8">Metric 4</Box>
              </HStack>
            </Flex>

            {/* actions */}
            <Flex
              px={{ base: "2", md: "8" }}
              py="2"
              position="sticky"
              top={{ base: "5em", md: "3em" }}
            >
              {actions}
            </Flex>

            {/* page content */}
            <Flex px={{ base: "2", md: "8" }} py="4">
              {children}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
