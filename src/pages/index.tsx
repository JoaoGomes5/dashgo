import { Button, Flex, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from '../components/Form/Input';

interface SignInFormData  {
  email: string,
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-Mail is required').email('Invalid E-Mail'),
  password: yup.string().required('Password is required')
})
export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  console.log(errors);
  
  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            error={errors.email}
            type='email'
            name='email'
            label='E-Mail'
            {...register('email')}
          />
          
          <Input
            error={errors.password}
            type='password'
            name='password'
            label='Password'
            {...register('password')}
          />
        </Stack>

        <Button
          type='submit'
          mt={6}
          colorScheme="pink"
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
