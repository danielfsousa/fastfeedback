import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  useDisclosure,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import useMergedRef from '@react-hook/merged-ref'
import * as db from '#lib/db'
import { useAuth } from '#lib/auth'
import { mutate } from 'swr'

const TOAST_DURATION = 5000

export default function AddSiteModal({ onSubmit, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit } = useForm()
  const auth = useAuth()
  const toast = useToast()
  const [isLoading, setIsLoading] = React.useState(false)
  const initialRef = React.useRef(null)
  const nameInputRef = useMergedRef(register({ required: true }), initialRef)

  async function createSite({ name, url }) {
    console.log({ name, url })
    setIsLoading(true)

    try {
      await mutate('/api/sites', async sites => {
        const newSite = {
          authorId: auth.user.uid,
          createdAt: new Date().toISOString(),
          name,
          url,
        }

        const doc = await db.createSite(newSite)
        return [{ id: doc.id, ...newSite }, ...sites]
      })

      toast({
        title: 'Success!',
        description: "We've created your account for you",
        status: 'success',
        duration: TOAST_DURATION,
        isClosable: true,
      })

      onClose()
    } catch (err) {
      console.error(err)
      toast({
        title: 'Oops',
        description: `Something bad happed: ${err}`,
        status: 'error',
        duration: TOAST_DURATION,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button variant="primary" onClick={onOpen}>
        {children}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={nameInputRef} name="name" placeholder="Name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input ref={register} name="url" placeholder="https://website.com" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="teal" isLoading={isLoading}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
