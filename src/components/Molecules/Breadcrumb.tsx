import { Box, Breadcrumb as CBreadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbProps } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'

export const Breadcrumb = (props: BreadcrumbProps) => (
  <CBreadcrumb
    fontSize="sm"
    {...props}
    separator={<Box as={HiChevronRight} color="gray.400" fontSize="md" top="2px" pos="relative" />}
  >
    <BreadcrumbItem color="inherit">
      <BreadcrumbLink>Medibase</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem color="inherit" isCurrentPage>
      <BreadcrumbLink>Products</BreadcrumbLink>
    </BreadcrumbItem>
  </CBreadcrumb>
)
