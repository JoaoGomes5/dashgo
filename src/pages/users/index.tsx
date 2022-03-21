import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import Pagination from '../../components/Pagination';
import { SideBar } from '../../components/Sidebar';

export default function UserList() {
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
            </Heading>
            
            <Button
              as="a"
              size='sm'
              fontSize='sm'
              colorScheme='pink'
              leftIcon={<Icon fontSize='20' as={RiAddLine}/>}
            >Create new</Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' w='8'>
                  <Checkbox colorScheme='pink'/>
                </Th>
                <Th>User</Th>
                <Th>Register date</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box >
                    <Text fontWeight='bold'>Joao Gomes</Text>
                    <Text fontSize='sm' color='gray.300'>joaopfg.2002@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  01 de Abril de 2022
                </Td>
                <Td>
                <Button
                  as="a"
                  size='sm'
                  fontSize='sm'
                  colorScheme='purple'
                  leftIcon={<Icon fontSize='16' as={RiPencilLine}/>}
                >Edit</Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box >
                    <Text fontWeight='bold'>Joao Gomes</Text>
                    <Text fontSize='sm' color='gray.300'>joaopfg.2002@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  01 de Abril de 2022
                </Td>
                <Td>
                <Button
                  as="a"
                  size='sm'
                  fontSize='sm'
                  colorScheme='purple'
                  leftIcon={<Icon fontSize='16' as={RiPencilLine}/>}
                >Edit</Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box >
                    <Text fontWeight='bold'>Joao Gomes</Text>
                    <Text fontSize='sm' color='gray.300'>joaopfg.2002@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  01 de Abril de 2022
                </Td>
                <Td>
                <Button
                  as="a"
                  size='sm'
                  fontSize='sm'
                  colorScheme='purple'
                  leftIcon={<Icon fontSize='16' as={RiPencilLine}/>}
                >Edit</Button>
                </Td>
              </Tr>
            </Tbody>

          </Table>
          
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}