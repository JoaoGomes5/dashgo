import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import React, { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType,
  text: string
}
export function NavLink({ icon , text , ...rest}: NavLinkProps) {
  return (
    <Link display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{text}</Text>
    </Link>
  );
}