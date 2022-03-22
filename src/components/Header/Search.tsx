import { Flex, Icon, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

export function Search() {
  // const [search, setSearch] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  console.log();
  
  return (
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
        ref={searchInputRef}
        />

        <Icon as={RiSearchLine} fontSize='20'/>
      </Flex>
  );
}