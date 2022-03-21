import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SideBar() {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <NavSection title='GENERAL'>
            <NavLink icon={RiDashboardLine} text='Dashboard'/>
            <NavLink icon={RiContactsLine} text='Users'/>
        </NavSection>

        <NavSection title='AUTOMIZATION'>
            <NavLink icon={RiInputMethodLine} text='Forms'/>
            <NavLink icon={RiGitMergeLine} text='Automation'/>
        </NavSection>
      </Stack>
    </Box>
  );  
}