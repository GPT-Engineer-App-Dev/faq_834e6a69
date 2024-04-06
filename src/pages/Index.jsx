import { Box, Container, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is React?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How do I install Chakra UI?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            You can install Chakra UI by running <Text as="code">npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion</Text> in your React project directory.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is Chakra UI?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications with speed.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Can I customize Chakra UI components?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Yes, Chakra UI components are highly customizable. You can override styles, compose new components, or extend them with your own logic.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How does Chakra UI handle responsiveness?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Chakra UI provides responsive helpers that allow you to apply different styles at different breakpoints, making it easy to build responsive designs.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Index;
