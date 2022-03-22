import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';


interface CreateUserFormData  {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('E-Mail is required').email('Invalid E-Mail'),
  password: yup.string().required('Password is required').min(6, '6 chars minimum'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Passwords should be equals')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data, event) => {

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data);
  }
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <SideBar />

        <Box
          as='form'
          flex="1"
          borderRadius={8}
          bg='gray.800'
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='normal'>Create user</Heading>

          <Divider my='6' borderColor='gray.700' />
          
          <VStack spacing='8'>
            <SimpleGrid
              minChildWidth='240px'
              spacing={['6','8']}
              w='100%'
            >
              <Input
                name='name'
                label='Name'
                error={errors.name}
                {...register('name')}
              />
              <Input
                name='email'
                type='email'
                label='E-Mail'
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth='240px'
              spacing={['6','8']}
              w='100%'
            >
              <Input
                name='password'
                type='password'
                label='Password'
                error={errors.password}
                {...register('password')}
              />
              <Input
                name='password_confirmation'
                type='password'
                label='Password confirmation'
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button colorScheme='whiteAlpha'>Cancel</Button> 
              </Link>

              <Button
                type='submit'
                colorScheme='pink'
                isLoading={formState.isSubmitting}
              >Save</Button> 
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}