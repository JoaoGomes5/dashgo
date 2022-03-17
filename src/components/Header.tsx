import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';
export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text
          as='span'
          color='pink.500'
          ml='1'
        >.</Text>
        
      </Text>

      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='8'
        maxWidth='400'
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >        
        <Input
          placeholder='Search on the platform'
          _placeholder={{ color: 'gray.400' }}
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
        />

        <Icon as={RiSearchLine} fontSize='20'/>
      </Flex>

      <Flex
        align='center'
        ml='auto'
      >
        <HStack
          spacing='8'
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <Icon as={RiNotificationLine} fontSize='20' />
          <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>

        <Flex
          align='center'
        >
          <Box mr='4' textAlign='right'>
            <Text>João Gomes</Text>
            <Text
              color='gray.300'
              fontSize='small'
            >joaopfg.2002@gmail.com</Text>
          </Box>
          
          <Avatar
            size='md'
            name='João Gomes'
            src='https://github.com/JoaoGomes5.png'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}