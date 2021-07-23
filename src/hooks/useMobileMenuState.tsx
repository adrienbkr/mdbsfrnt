import {
  useBoolean,
  useMediaQuery
} from "@chakra-ui/react";
import * as React from 'react'

export const useMobileMenuState = () => {
  const [isOpen, actions] = useBoolean();

  const [isMobile] = useMediaQuery("(max-width: 767px)")

  React.useEffect(() => {
    if (isMobile === false) {
      actions.off()
    }
  }, [isMobile, actions])

  return {
    isMobile,
    isOpen,
    ...actions,
  };
};