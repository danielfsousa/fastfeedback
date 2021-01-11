import React from 'react'
import { Heading, Box, Text, Button } from '@chakra-ui/react'
import DashboardShell from './DashboardShell'

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="white" width="100%" borderRadius="md" p={8}>
      <Heading size="md">Get feedback on your site instantly.</Heading>
      <Text>Start today and grow with us</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
)

export default FreePlanEmptyState
