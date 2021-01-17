import { Box, Link } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import React from 'react'
const { Td, Table, Tr, Th } = require('./Table')

const SiteTable = ({ sites }) => (
  <Table>
    <thead>
      <Tr>
        <Th>Name</Th>
        <Th>Site Link</Th>
        <Th>Feedback Link</Th>
        <Th>Date Added</Th>
        {/* <Th /> */}
      </Tr>
    </thead>
    <tbody>
      {sites.map(site => {
        const siteUrl = new URL(site.url)
        let formattedUrl = siteUrl.hostname
        if (siteUrl.pathname !== '/') {
          formattedUrl += siteUrl.pathname
        }

        return (
          <Box as="tr" key={site.id}>
            <Td fontWeight="medium">{site.name}</Td>
            <Td>
              <Link
                color="teal.400"
                _hover={{ color: 'teal.300' }}
                fontWeight="medium"
                href={site.url}
                isExternal
              >
                {formattedUrl}
              </Link>
            </Td>
            <Td>
              <Link>View Feedback</Link>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Box>
        )
      })}
    </tbody>
  </Table>
)

export default SiteTable
