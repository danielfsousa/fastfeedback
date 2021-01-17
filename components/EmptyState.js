import React from 'react'
import { Heading, Text, Flex } from '@chakra-ui/react'
import AddSiteModal from './AddSiteModal'

const EmptyState = () => (
  <Flex
    backgroundColor="white"
    width="100%"
    borderRadius="lg"
    p={16}
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="md" mb={4}>
      You haven&apos;t added any sites.
    </Heading>
    <Text mb={8}>Let&apos;s get started</Text>
    <AddSiteModal>Add your first site</AddSiteModal>
  </Flex>
)

export default EmptyState
