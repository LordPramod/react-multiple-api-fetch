/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Box,
  FormHelperText,
  Spacer,
  Link,
  HStack,
  Flex,
  Heading,
  ColorModeProvider,
  ColorModeScript,
  useColorMode,
  textDecoration,
  Alert,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogOverlay,
  AlertDialogContent,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router";

function SignInForm() {
  // const [input, setInput] = useState('')

  // const handleInputChange = (e) => setInput(e.target.value)
  const [showAlert, setShowAlert] = useState(false);

  let emailInput = (e) => e.target.value;

  const { colorMode, toggleColorMode } = useColorMode();
  const linkStyles = {
    color: "teal",
    _hover: {
      color: "",
    },
  };
  const tmStyle = {
    color: "teal",
  };

  return (
    <>
      <Button
        colorScheme="teal"
        onClick={toggleColorMode}
        padding={"10px"}
        marginLeft={"1400px"}
        mt={"20px"}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Box
        maxW={"500px"}
        h={"440px"}
        m={"200px auto"}
        borderRadius={"8px"}
        p={"20px"}
        bg={"gray.50"}
        boxShadow={"2xl"}
      >
        <Form method="get" action="/">
          <Heading color={"teal.400"} as="h1" p={"5px"} mb={"30px"}>
            Login Form
          </Heading>
          <FormControl isRequired mb={"20px"} colorScheme="teal">
            <Flex>
              <FormLabel color={"teal.600"}>Enter Email/User Name :</FormLabel>
            </Flex>
            <Input
              type="email"
              name="username"
              color={"teal"}
              onChange={emailInput}
            />
            <FormHelperText color={"teal.500"}>
              Enter the email you&apos;d like to receive the newsletter on.
            </FormHelperText>
          </FormControl>
          <FormControl isRequired mb={"20px"} color={"teal.500"}>
            <FormLabel>Enter Password :</FormLabel>
            <Input type="password" name="password" />
          </FormControl>
          <FormControl
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            mb={"20px"}
          >
            <Checkbox colorScheme="teal" />
            <FormLabel sx={tmStyle}>I accept...</FormLabel>
            <Spacer />
            <Link colorScheme="teal" sx={linkStyles}>
              Forgot your password ?{" "}
            </Link>
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            w={"100%"}
            onClick={() => {
              setShowAlert(true);
            }}
          >
            Submit
          </Button>

          {showAlert && (
            <AlertDialog
              isOpen={showAlert}
              onClose={() => {
                setShowAlert(false);
              }}
            >
              <AlertDialogOverlay>
                <AlertDialogContent bg={"teal.700"} color={"white"}>
                  <AlertDialogBody color={"white"}>
                    Button Is Clicked
                  </AlertDialogBody>
                  <AlertDialogCloseButton color={"teal.400"} />
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          )}
        </Form>
      </Box>
    </>
  );
}

export default SignInForm;
