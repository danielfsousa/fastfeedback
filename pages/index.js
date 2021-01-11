import React from 'react'
import Head from 'next/head'
import { Button, Code, Flex, Text } from '@chakra-ui/react'
import Logo from '#components/Logo'
import { useAuth } from '#lib/auth'

export default function Home() {
  const auth = useAuth()

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Logo />

      <Text>
        Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
      </Text>

      {auth.user ? (
        <Button mt={4} onClick={e => auth.signout()}>
          Sign out
        </Button>
      ) : (
        <Button mt={4} onClick={e => auth.signinWithGithub()}>
          Sign in
        </Button>
      )}
    </Flex>
  )
}
