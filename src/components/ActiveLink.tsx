import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { cloneElement, ReactElement } from 'react';

{/* <Component>
  ReactNode
  <Texto> </Texto>
  asdasda
  12312

  ReactElement
  <Texto> </Texto>
</Component> */}

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest }: ActiveLinkProps) {
  
  let isAcitive = false;
  const { asPath } = useRouter()

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isAcitive = true
  }

  if (!shouldMatchExactHref &&
    (
      asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as))
    )){
      isAcitive = true
    }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isAcitive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  );
}