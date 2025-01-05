import { Grid, Box, GridItem, Flex, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router";
import Header from "./Header";

function NavBar() {
  // Currently not in use
  const setActive = ({ isActive }) => {
    isActive ? "active" : "";
  };

  return (
    <>
      <Grid templateColumns={"repeat(6, 1fr)"} p={"5px"} minH={"100vh"}>
        <GridItem
          colSpan={1}
          bg={"purple.500"}
          position={"sticky"}
          top={"5px"}
          height={"calc(100vh - 10px)"}
          zIndex={2}
        >
          <Box
            position={"sticky"}
            flexDirection={"column"}
            display="flex"
            gap="30px"
            padding={"20px"}
            fontSize={"large"}
            color={"gray.100"}
            fontWeight={"semibold"}
            mt={"30px"}
            fontFamily={"sans-serif"}
          >
            <NavLink to={"/"}>
              <Flex align="center" gap="2px">
                <Text> Dashboard</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/dog"}>
              <Flex align="center" gap="2">
                <Text>Dog Image Generator</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/country"}>
              <Flex align="center" gap="2">
                <Text>Country Information</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/products"}>
              <Flex align="center" gap="2">
                <Text>FakeStore Products</Text>
              </Flex>
            </NavLink>
          </Box>
        </GridItem>
        <GridItem
          colSpan={5}
          border={"1px solid"}
          bg={"gray.50"}
          display={"flex"}
          flexDirection={"column"}
          position="relative"
          height={"calc(100vh - 10px)"}
          overflow="hidden"
        >
          <GridItem
            bg="purple.400"
            p={"10px"}
            position="sticky"
            top={0}
            zIndex={1}
          >
            <Header />
          </GridItem>
          <Box flex={1} overflow="auto" position="relative">
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default NavBar;
