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
  useDisclosure,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as db from '#lib/db'

export default function AddSiteModal({ onSubmit }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit } = useForm()
  const initialRef = register({ required: true })

  function createSite(values) {
    console.log(values)
    db.createSite(values)
  }

  return (
    <>
      <Button variant="solid" size="md" onClick={onOpen}>
        Add Your First Site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} name="site" placeholder="My site" />
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
            <Button type="submit" colorScheme="teal">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
