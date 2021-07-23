import * as React from "react";
import { Button, Flex, Stack } from "@chakra-ui/react";

interface ActionsProps {}

export const Actions = (props: ActionsProps) => {
  const {} = props;
  return (
    <Stack spacing={4} direction="row" align="center">
      <Button colorScheme="dust">
        Action
      </Button>
      <Button colorScheme="dust">
        Action
      </Button>
      <Button colorScheme="dust">
        Action
      </Button>
      <Button colorScheme="dust">
        Action
      </Button>
    </Stack>
  );
};
