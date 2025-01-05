import { Heading, Text } from "@chakra-ui/react";

function Test({ title, userName }) {
  return (
    <>
      <Heading fontSize={"customLarge"}>This is Heading {title}</Heading>
      <Text fontSize={"customSmallest"}>Your Name is : {userName}</Text>
    </>
  );
}

export default Test;
