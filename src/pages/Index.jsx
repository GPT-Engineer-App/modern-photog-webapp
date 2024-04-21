import { Box, Flex, Text, Button, Image, VStack, HStack, Input, Textarea, Link, Icon } from "@chakra-ui/react";
import { FaCameraRetro, FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header Section */}
      <Flex justifyContent="space-between" alignItems="center" p={4} bg="blackAlpha.800" color="white">
        <Flex alignItems="center">
          <Icon as={FaCameraRetro} w={8} h={8} mr={2} />
          <Text fontSize="xl" fontWeight="bold">
            PhotoSnap
          </Text>
        </Flex>
        <HStack spacing={4}>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex justifyContent="center" alignItems="center" height="70vh" bgImage="https://images.unsplash.com/photo-1468730390451-2cd74fc670b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBzaG9vdGluZyUyMG91dGRvb3JzfGVufDB8fHx8MTcxMzY5NzIyMnww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center">
        <VStack>
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Capture Every Moment
          </Text>
          <Button colorScheme="teal" size="lg">
            View Gallery
          </Button>
        </VStack>
      </Flex>

      {/* Gallery Section */}
      <Box id="gallery" p={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Gallery
        </Text>
        <Flex wrap="wrap" justifyContent="space-around">
          <Image src="https://images.unsplash.com/photo-1532598187460-98fe8826d1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTM2OTcyMjN8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" m={2} />
          <Image src="https://images.unsplash.com/photo-1579976327048-ee8afcadda27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMzY5NzIyNHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" m={2} />
          <Image src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMzY5NzIyNHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" m={2} />
        </Flex>
      </Box>

      {/* About Section */}
      <Box id="about" p={4} bg="gray.100">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          About Me
        </Text>
        <Text fontSize="md">I'm a passionate photographer with over 10 years of experience in capturing life's most precious moments. My mission is to help you preserve these memories through beautiful, timeless photographs.</Text>
      </Box>

      {/* Contact Section */}
      <Box id="contact" p={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Contact Us
        </Text>
        <VStack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="teal">Send Message</Button>
        </VStack>
      </Box>

      {/* Footer Section */}
      <Flex p={4} bg="blackAlpha.800" color="white" justifyContent="space-between">
        <Text>© 2023 PhotoSnap</Text>
        <HStack>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebookF} />
          </Link>
          <Link href="mailto:info@photosnap.com">
            <Icon as={FaEnvelope} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;
