import * as React from "react";
import { Button, Flex, Stack } from "@chakra-ui/react";

interface MenuProps {}

export const Menu = (props: MenuProps) => {
  const {} = props;
  return (
    <Stack spacing={4} direction="row" align="center">
      <Button colorScheme="dust" variant="outline">
        menu link
      </Button>
      <Button colorScheme="dust" variant="outline">
        menu link
      </Button>
    </Stack>
  );
};
