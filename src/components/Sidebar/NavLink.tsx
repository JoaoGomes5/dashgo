import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import React, { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  text: string
  href: string
}
export function NavLink({ icon , text , href , ...rest}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{text}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}