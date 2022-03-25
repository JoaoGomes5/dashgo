import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import Pagination from '../../components/Pagination';
import { SideBar } from '../../components/Sidebar';
import { useUsers } from '../../services/hooks/users/useUsers';

export default function UserList() {
  
  const { data, isLoading, isFetching , error } = useUsers()
  
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

 
  
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <SideBar />

        <Box
          flex="1"
          borderRadius={8}
          bgColor='gray.800'
          p={8}
        >

          <Flex
            mb={8}
            justify='space-between'
            align='center'
          >
            <Heading
              size='lg'
              fontWeight='normal'
            >
              Users 
              {
                !isLoading && isFetching &&
                <Spinner size='sm' color="gray.500" ml='4'/>
              }
            </Heading>
            
            <Link href='/users/create' passHref>
              <Button
                as="a"
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon fontSize='20' as={RiAddLine}/>}
                >Create new</Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
              <Flex>
                <Text>Error</Text>
              </Flex>
            ) : (
                <>
              <Table colorScheme='whiteAlpha'>
              <Thead>
                <Tr>
                  <Th px={['4','4','6']} color='gray.300' w='8'>
                    <Checkbox colorScheme='pink'/>
                  </Th>
                  <Th>User</Th>
  
                  {isWideVersion && <Th>Register date</Th>}
                  
                  {/* <Th w='8'></Th> */}
                </Tr>
              </Thead>
  
              <Tbody>
                  {data.map(user => (
                    <Tr key={user.username} >
                      <Td px={['4','4','6']}>
                        <Checkbox colorScheme='pink'/>
                      </Td>
                      <Td>
                        <Box >
                          <Text fontWeight='bold'>{user.name}</Text>
                          <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{ user.createdAt}</Td> }
                  </Tr>
                  ))}
              </Tbody>
  
            </Table>
            
                  <Pagination />
                </>
                  
          )}
        </Box>
      </Flex>
    </Box>
  );
}