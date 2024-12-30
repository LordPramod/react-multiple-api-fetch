import {
  Grid,
  Heading,
  Box,
  GridItem,
  Flex,
  Text,
  Button,
  useToast,
  Avatar,
} from "@chakra-ui/react";



import { NavLink, Outlet } from "react-router";


function NavBar() {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Loggout",
      description: "Sucessfully Logout",
      isClosable: true,
      duration: 5000,
      position: "top-right",
    });
  };
  return (
    <>
      <Grid templateColumns={"repeat(6, 1fr)"} p={"5px"} minH={"100vh"}>
        <GridItem colSpan={1} bg={"purple.500"} minH={"100vh"}>
          <Box
            flexDirection={"column"}
            display="flex"
            gap="20px"
            padding={"30px"}
            fontSize={"larger"}
            color={"gray.100"}
            fontWeight={'semibold'}>
            <NavLink to={"/"} className={({ isActive }) => 
              isActive ? "active-link" : ""
            }>
              <Flex align="center" gap="2" _hover={{ color: "gray.400" }}>
               
                <Text> Dashboard</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/dog"}>
              <Flex align="center" gap="2" _hover={{ color: "gray.400" }}>
               
                <Text>Dog Image Generator</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/country"}>
              <Flex align="center" gap="2" _hover={{ color: "gray.400" }}>
                
                <Text>Country Information</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/products"}>
              <Flex align="center" gap="2" _hover={{ color: "gray.400" }}>
             
                <Text>FakeStore Products</Text>
              </Flex>
            </NavLink>
          </Box>
        </GridItem>
        <GridItem
          colSpan={5}
          border={"1px solid"}
          bg={"gray.200"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box display={"flex"} justifyContent={"end"} maxH={"80px"}>
            <Box
              display={"flex"}
              textAlign={"center"}
              alignItems={"center"}
              gap={"30px"}
              padding={"10px"}
            >
              <Heading
                as={"h2"}
                color={"gray.200"}
                maxH={"max-content"}
                
              >
                <Avatar width={'40px'} height={'40px'}></Avatar>
              </Heading>
              <Text colorScheme="white">thapapramod821@gmail.com</Text>
              <Button colorScheme="purple" onClick={showToast}>
                Logout
              </Button>
            </Box>
          </Box>
          <Box flex="1" overflowY="auto">
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default NavBar;
