import React from 'react'
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react'
import Logo from './Logo'
import { useAuth } from '#lib/auth'

const DashboardShell = ({ children }) => {
  const { user } = useAuth()

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={8}
        py={4}
        backgroundColor="white"
      >
        <Stack spacing={4} isInline alignItems="center">
          <Logo />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={user.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" height="100vh" p={8}>
        <Flex direction="column" w="100%" maxWidth="800px" mx="auto">
          <Breadcrumb color="gray.700">
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={8}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell
