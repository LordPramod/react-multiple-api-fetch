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
      <Grid templateColumns={"repeat(6, 1fr)"} minH={"100vh"}>
        <GridItem
          boxShadow={"xl"}
          colSpan={1}
          bg={"custom.100"}
          position={"sticky"}
          top={"0px"}
          height={"calc(100vh - 10px)"}
          zIndex={2}
        >
          <Box
            position={"sticky"}
            flexDirection={"column"}
            display="flex"
            gap="30px"
            padding={"20px"}
            fontSize={"customSmallest"}
            color={"custom.400"}
            fontWeight={"semibold"}
            mt={"30px"}
            fontFamily={"sans-serif"}
          >
            <NavLink to={"/"}>
              <Flex align="center" gap="2px">
                <Text _hover={{ color: "white" }}> Dashboard</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/dog"}>
              <Flex align="center" gap="2">
                <Text _hover={{ color: "white" }}>Dog Image Generator</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/country"}>
              <Flex align="center" gap="2">
                <Text _hover={{ color: "white" }}>Country Information</Text>
              </Flex>
            </NavLink>
            <NavLink to={"/products"}>
              <Flex align="center" gap="2">
                <Text _hover={{ color: "white" }}>FakeStore Products</Text>
              </Flex>
            </NavLink>
          </Box>
        </GridItem>
        <GridItem
          colSpan={5}
          bg={"gray.50"}
          display={"flex"}
          flexDirection={"column"}
          position="relative"
          height={"calc(100vh - 10px)"}
          overflow="hidden"
        >
          <GridItem
            bg="custom.100"
            p={"10px"}
            position="sticky"
            top={0}
            zIndex={1}
            color={"whiteAlpha.900"}
            boxShadow={"xl"}
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
