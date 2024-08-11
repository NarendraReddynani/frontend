import { Box, FormControl, FormLabel, Input, FormHelperText, Button, Heading, Flex, Stack, useColorModeValue, Link } from "@chakra-ui/react";
import { useState } from "react";
export const UpdatePassword = () => {
  const boxBg = useColorModeValue("rgba(255, 255, 255, 0.4)", "rgba(0, 0, 0, 0.4)");
  const boxShadow = useColorModeValue("xl", "dark-lg");
  const [email,setEmail]=useState()
  const [newpassword,setNewpassword]=useState()
  const [current,setCurrentpassword]=useState()
  const [confirm,setConfirm]=useState()
  const Updatepassword=async()=>{
    try {

      
      const res = await axios.post(api + "/updates", { email, password });

      if (res.data.message) {
          sessionStorage.auth=JSON.stringify(res?.data?.values)
          console.log(res?.data?.values);
          alert("Login successfully");
          nav('/students')
      } 
      else if (res.data.error) {
          if (res.data.error === "Email not found. Please sign up.") {
              alert("Email not found. Please sign up.");
              window.location.href = "/signup"; // Redirect to signup page if email is not found
          } else if (res.data.error === "Incorrect password. Please try again.") {
              alert("Incorrect password. Please try again.");
          } else {
              alert("An error occurred during login. Please try again later.");
          }
      }
  } catch (e) {
      console.log(e);
      alert("An error occurred while attempting to sign in. Please try again later.");
  }
}; 
  }


  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      background="url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      px={4}
    >
      <Box
        width={{ base: "100%", sm: "400px", md: "400px" }}
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow={boxShadow}
        backgroundColor={boxBg}
        backdropFilter="blur(10px)"
        border="5px solid rgba(255, 255, 255, 0.18)"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={8} color="teal.600">
          Update Password
        </Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.400" }}
              _focus={{ boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.6)" }}
              transition="all 0.2s ease-in-out"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your current password"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.400" }}
              _focus={{ boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.6)" }}
              transition="all 0.2s ease-in-out"
            />
            <Link
              color="teal.500"
              fontSize="sm"
              mt={2}
              _hover={{ textDecoration: "underline", color: "teal.600" }}
              href="#"
              alignSelf="flex-start"
            >
              Forgot Password?
            </Link>
          </FormControl>
          <FormControl>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your new password"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.400" }}
              _focus={{ boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.6)" }}
              transition="all 0.2s ease-in-out"
            />
            <FormHelperText>Ensure your new password is strong.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Confirm New Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your new password"
              focusBorderColor="teal.500"
              _hover={{ borderColor: "teal.400" }}
              _focus={{ boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.6)" }}
              transition="all 0.2s ease-in-out"
            />
          </FormControl>
          <Button
            colorScheme="teal"
            size="lg"
            width="full"
            boxShadow="lg"
            _hover={{ bgGradient: "linear(to-r, teal.500, green.400)", boxShadow: "xl" }}
            _active={{ bgGradient: "linear(to-r, teal.600, green.500)", boxShadow: "2xl" }}
            transition="all 0.3s ease-in-out"
          >
            Update Password
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};
