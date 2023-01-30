import { Alert, AlertTitle, Box, Button, Input, Stack, Text } from "@chakra-ui/react"
import { fetchBackend } from "apps/frontend/lib/api"
import { getCsrfToken, signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"


export default function Signup() {
  const router = useRouter()
  const [isError, setIsError] = useState(null)
  const formHook = useForm({
    values: {
      name: '',
      email: '',
      password: ''
    },
  })

  return (
    <>
      <Box h={'calc(100vh)'} display='flex' justifyContent={'center'} alignItems={'start'}>
        <form onSubmit={formHook.handleSubmit(async (data) => {
          try {
            const response = await fetchBackend('/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
            if (response.ok) {
              router.push('/auth/signin')
            } else {
              setIsError(true)
            }
          } catch (e) {
            console.log(e)
            setIsError(true)
          }
        })}>
          <Stack mt='6' gap='3'>
            <Text fontSize={'2xl'} align='center' fontWeight={'bold'}> Register </Text>
            <Input placeholder='Name' {...formHook.register('name')}></Input>
            <Input placeholder='email' {...formHook.register('email')}></Input>
            <Input placeholder='password' type='password' {...formHook.register('password')}></Input>
            {isError && <Alert status='error'>
              <AlertTitle>Gagal register</AlertTitle></Alert>}
            <Button type='submit'>
              Register
            </Button>
            <Link href='/auth/signin'>
              <Button variant='link'>
                Login
              </Button>
            </Link>
          </Stack>
        </form>
      </Box>
    </>
  )
}