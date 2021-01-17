import React from 'react'
import { Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Box } from '@chakra-ui/react'

import Header from './Header'
import AddSiteModal from './AddSiteModal'

const DashboardShell = ({ children }) => {
  return (
    <Box backgroundColor="gray.100" height="100vh">
      <Header />

      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        <Breadcrumb color="gray.700">
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex justify="space-between">
          <Heading mb={8}>My Sites</Heading>
          <AddSiteModal>+ Add site</AddSiteModal>
        </Flex>

        {children}
      </Flex>
    </Box>
  )
}

export default DashboardShell
