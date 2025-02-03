import { UserButton } from '../UserButton/UserButton';
import {
  Divider,
  Group,
  Paper,
  PaperProps,
  Text,
  Container,
  Center,
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import { useNavigate } from 'react-router-dom';

export function AuthenticationForm(props: PaperProps) {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Navigate to the /services route
    navigate('/services');
  };

  return (
    <Container h="90vh">
      <Center h="100%">
        <Paper radius="md" p="xl" withBorder {...props} style={{ width: 500 }}>
          <Center>
            <UserButton />
          </Center>

          {/* Centered 'Book your appointment' */}
          <Center>
            <Text size="xl" fw={500}>
              Book your appointment
            </Text>
          </Center>

          {/* Centered additional text */}
          <Center>
            <Text size="sm" color="dimmed" mt="sm">
              Please sign in with Google to book your appointment.
            </Text>
          </Center>

          <Divider label="login with Google" labelPosition="center" my="lg" />

          {/* Centered GoogleButton */}
          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl" onClick={handleGoogleSignIn}>
              Google
            </GoogleButton>
          </Group>

          {/* Centered Terms and Conditions link */}
          <Center>
            <Text size="xs" color="dimmed" mt="sm">
              By signing in with Google, you accept our{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </a>.
            </Text>
          </Center>
        </Paper>
      </Center>
    </Container>
  );
}
