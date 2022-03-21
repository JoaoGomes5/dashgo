import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface Profile {
  showProfileData?: boolean
}
export function Profile({ showProfileData = true}: Profile) {
  return (
    <Flex align='center'>
      {showProfileData && (
         <Box mr='4' textAlign='right'>
         <Text>João Gomes</Text>
         <Text
           color='gray.300'
           fontSize='small'
         >joaopfg.2002@gmail.com</Text>
       </Box>
      )}
          
          <Avatar
            size='md'
            name='João Gomes'
            src='https://github.com/JoaoGomes5.png'
          />
        </Flex>
  );
}