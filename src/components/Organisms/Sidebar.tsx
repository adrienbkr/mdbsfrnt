import * as React from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  BsBagFill,
  BsCollectionFill,
  BsFillGrid1X2Fill,
  BsFillInboxesFill,
  BsPersonFill,
  BsPower,
} from "react-icons/bs";
import { ScrollArea } from "../Molecules/ScrollArea";
import { SidebarLink } from "../Molecules/SidebarLink";
import { UserInfo } from "../Molecules/UserInfo";

interface SidebarProps {
  user?: {
    name: string;
    email: string;
    image: string;
  };
}

export const Sidebar = (props: SidebarProps) => {
  const { user } = props;
  return (
    <Box fontSize="sm" lineHeight="tall">
      <Box
        as="a"
        href="#"
        px="3"
        pt="3"
        pb="2"
        display="block"
        transition="background 0.1s"
        rounded="xl"
        _hover={{ bg: "dust.200" }}
        whiteSpace="nowrap"
      >
        <UserInfo
          name={user?.name || "Esther Collins"}
          email={user?.email || "esther-colls@chakra.com"}
          image={
            user?.image ||
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          }
        />
      </Box>
      <ScrollArea pt="5" pb="6">
        <Stack pb="6">
          <SidebarLink icon={<BsFillGrid1X2Fill />}>Vue d'ensemble</SidebarLink>
          <SidebarLink icon={<BsBagFill />}>Ventes</SidebarLink>
          <SidebarLink icon={<BsFillInboxesFill />}>Stock</SidebarLink>
          <SidebarLink icon={<BsPersonFill />}>Patients</SidebarLink>
          <SidebarLink icon={<BsCollectionFill />}>Produits</SidebarLink>
          <SidebarLink icon={<BsPower />}>Déconnection</SidebarLink>
        </Stack>
      </ScrollArea>
    </Box>
  );
};
