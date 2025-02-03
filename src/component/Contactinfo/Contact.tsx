import { UserButton } from '../UserButton/UserButton';
import {
  Divider,
  Group,
  Paper,
  PaperProps,
  Text,
  Container,
  Center,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { ContinueButton } from './GoogleButton';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function Contact(props: PaperProps) {
  const navigate = useNavigate(); // Initialize navigation function

  // Initialize the form
  const form = useForm({
    initialValues: {
      phone: '',
      message: '',
    },

    validate: {
      phone: (value) =>
        /^\d{10}$/.test(value) ? null : 'Please enter a valid 10-digit phone number',
    },
  });

  const handleContinue = () => {
    navigate('/review'); // Navigate to /review
  };

  return (
    <Container h="90vh">
      <Center h="120%">
        {/* Paper component with dynamic size */}
        <Paper
          radius="md"
          p="md"
          withBorder
          {...props}
          style={{
            minWidth: 300, // Minimum width to prevent it from becoming too narrow
            maxWidth: 600, // Maximum width to prevent it from becoming too wide
            width: '100%', // Allow it to grow responsively
          }}
        >
          <Center>
            <UserButton />
          </Center>

          {/* Centered 'Contact Information' */}
          <Center>
            <Text size="xl" fw={500}>
              Contact Information
            </Text>
          </Center>

          <Divider my="lg" />

          {/* Form Section */}
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              required
              variant="filled"
              label="WhatsApp Phone Number"
              placeholder="Enter your 10-digit WhatsApp phone number, e.g. +918957276641"
              {...form.getInputProps('phone')}
              mb="md"
            />

            <Textarea
              label="Message (Optional)"
              variant="filled"
              placeholder="Add any additional notes"
              {...form.getInputProps('message')}
              minRows={15} // Increased minimum height
              maxRows={100}
              mb="lg"
            />
          </form>

          <Divider my="lg" />

          {/* Centered ContinueButton */}
          <Group grow mb="md" mt="md">
            <ContinueButton radius="xl" onClick={handleContinue}>
              Continue
            </ContinueButton>
          </Group> 
        </Paper>
      </Center>
    </Container>
  );
}
