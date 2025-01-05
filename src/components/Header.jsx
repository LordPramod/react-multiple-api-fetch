import { Avatar, Box, Button, Heading, Text, useToast } from "@chakra-ui/react";

const Header = () => {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Logout",
      description: "Successfully Logout",
      isClosable: true,
      duration: 5000,
      position: "top-right",
    });
  };
  return (
    <>
      <Box display={"flex"} justifyContent={"end"} maxH={"80px"}>
        <Box
          display={"flex"}
          textAlign={"center"}
          alignItems={"center"}
          gap={"30px"}
          padding={"10px"}
          fontSize={"customSmall"}
        >
          <Heading as={"h2"} color={"gray.200"} maxH={"max-content"}>
            <Avatar width={"40px"} height={"40px"}></Avatar>
          </Heading>
          <Text colorScheme="white">thapapramod821@gmail.com</Text>
          <Button
            bg={"custom.300"}
            color={"white"}
            _hover={{ bg: "custom.400" }}
            onClick={showToast}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
