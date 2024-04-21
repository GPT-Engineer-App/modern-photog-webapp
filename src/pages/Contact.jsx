import React from "react";
import { Box, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";

function Contact() {
  return (
    <Box p={5}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" />
        <FormLabel mt={4}>Email</FormLabel>
        <Input placeholder="Your Email" />
        <FormLabel mt={4}>Message</FormLabel>
        <Textarea placeholder="Your Message" />
        <Button mt={4} colorScheme="blue">
          Send Message
        </Button>
      </FormControl>
    </Box>
  );
}

export default Contact;
