import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function IndexPage() {
  return (
    <Box display={'flex'} justifyContent='center' alignItems={'center'} p='6'>
      <Link href='/auth/signin'>
        <Button variant='link'>
          Login Here
        </Button>
      </Link>
    </Box>
  )
}