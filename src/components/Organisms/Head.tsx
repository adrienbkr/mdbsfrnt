import * as React from "react";
import { Flex, Heading } from "@chakra-ui/react";

interface HeadProps {
  title: string;
}

export const Head = (props: HeadProps) => {
  const { title } = props;
  return (
    <Flex>
      <Heading size="md" fontWeight="extrabold">
        {title}
      </Heading>
    </Flex>
  );
};
