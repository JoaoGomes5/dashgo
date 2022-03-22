import { Stack } from '@chakra-ui/react';
import React from 'react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
        <NavSection title='GENERAL'>
            <NavLink icon={RiDashboardLine} text='Dashboard' href='/dashboard'/>
            <NavLink icon={RiContactsLine} text='Users' href='/users'/>
        </NavSection>

        <NavSection title='AUTOMIZATION'>
            <NavLink icon={RiInputMethodLine} text='Forms' href='/forms'/>
            <NavLink icon={RiGitMergeLine} text='Automation' href='/automation'/>
      </NavSection>
    </Stack>
  );
}