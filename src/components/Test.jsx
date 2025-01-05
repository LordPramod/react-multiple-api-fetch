import { Heading, Text } from '@chakra-ui/react'


function Test({title, userName}) {
  return (
    <>
    <Heading>This is Heading {title}</Heading>
    <Text>Your Name is : {userName}</Text>
    </>
  )
}

export default Test