import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function SecretPage() {
  const router = useRouter()
  const session = useSession()
  return (
    <Box display={'flex'} justifyContent='center' alignItems={'center'} p='6' flexDir={'column'} gap='6'>
      <Heading size='2xl'>
        Secret page
      </Heading>
      <Heading size='xl'>
        Hello {session.data.user.name ?? 'Anonymous'}
      </Heading>
      <Text>
        You are logged in as {session.data.user.email}
      </Text>
      <Button variant='link' onClick={() => {
        signOut()
        router.push('/auth/signin')
      }}>
        Logout Here
      </Button>
    </Box>
  )
}