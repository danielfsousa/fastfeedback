import React from 'react'
import { Flex, Link, Avatar, Button } from '@chakra-ui/react'
import { useAuth } from '#lib/auth'
import Logo from './Logo'

const Header = () => {
  const { user, signout } = useAuth()
  return (
    <Flex
      backgroundColor="white"
      mb={[8, 16]}
      w="full"
      borderTop="5px solid"
      borderColor="teal.300"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="full"
        h="60px"
        maxW="1250px"
        margin="0 auto"
        px={8}
        py={4}
      >
        <Flex align="center">
          <Link mr={8}>
            <Logo />
          </Link>
          <Link mr={4}>Sites</Link>
          <Link>Feedback</Link>
        </Flex>

        <Flex align="center" justify="center">
          {user && (
            <Button variant="ghost" mr={2} onClick={signout}>
              Logout
            </Button>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
