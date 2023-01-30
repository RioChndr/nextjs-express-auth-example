import { Alert, AlertTitle, Box, Button, Input, Stack, Text } from "@chakra-ui/react"
import { getCsrfToken, signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function SignIn({ csrfToken }) {
  const router = useRouter()
  const [isError, setIsError] = useState(null)
  // get query url
  const { query } = router

  const doLogin = async (e) => {
    setIsError(false)
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        callbackUrl: query.callbackUrl as string || '/admin',
        redirect: false,
        email: e.target[0].value,
        password: e.target[1].value,
      })
      if (res.error) {
        setIsError(true)
        return
      }
      router.push(res.url)
    } catch (e) {
      setIsError(true)
    }

  }

  return (
    <>
      <Box h={'calc(100vh)'} display='flex' justifyContent={'center'} alignItems={'start'}>
        <form onSubmit={doLogin}>
          <Stack mt='6' gap='3'>
            <Text fontSize={'2xl'} align='center' fontWeight={'bold'}> Login </Text>
            <Input placeholder='email'></Input>
            <Input placeholder='password'></Input>
            {isError && <Alert status='error'>
              <AlertTitle>Email atau password salah</AlertTitle></Alert>}
            <Button type='submit'>
              Login
            </Button>
            <Link href='/auth/signup'>
              <Button variant='link'>
                Register
              </Button>
            </Link>
          </Stack>
        </form>
      </Box>
    </>
  )
}