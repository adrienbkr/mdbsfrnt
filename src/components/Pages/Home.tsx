import * as React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { LPrivate } from "../Layouts/LPrivate";
import { Breadcrumb } from "../Molecules/Breadcrumb";
import { Sidebar } from "../Organisms/Sidebar";
import { Head } from "../Organisms/Head";
import { Actions } from "../Organisms/Actions";
import { Menu } from "../Organisms/Menu";

interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <LPrivate
      head={<Head title="Produits" />}
      sidebar={<Sidebar />}
      menu={<Menu />}
      actions={<Actions />}
      breadcrumb={<Breadcrumb />}
    >
      <VStack w="full" direction="column" spacing="2">
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
        <Box w="full" h="32" bg="gray.100" rounded="8"></Box>
      </VStack>
    </LPrivate>
  );
};
