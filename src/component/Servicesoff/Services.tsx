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
import { ContinueButton } from './GoogleButton';
import { ServiceCard } from '../ImageCheckboxes/ImageCheckboxes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Sample service data
const servicesData = [
  {
    name: 'Psychotherapy Session',
    description: 'A one-on-one session for emotional and mental health support.',
    duration: '50 minutes',
    price: '₹1,500',
    image: '/path/to/your/image1.jpg', // Add an image if needed
  },
  {
    name: 'Cognitive Behavioral Therapy',
    description: 'CBT to help manage and reduce symptoms of anxiety and depression.',
    duration: '60 minutes',
    price: '₹2,000',
    image: '/path/to/your/image2.jpg', // Add an image if needed
  },
  {
    name: 'Couples Therapy',
    description: 'Session for couples to work through relationship issues.',
    duration: '75 minutes',
    price: '₹2,500',
    image: '/path/to/your/image3.jpg', // Add an image if needed
  },
  {
    name: 'Child Therapy',
    description: 'Therapy designed specifically for children and adolescents.',
    duration: '45 minutes',
    price: '₹1,800',
    image: '/path/to/your/image4.jpg', // Add an image if needed
  },
];

export function Services(props: PaperProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null); // State to track selected service
  const navigate = useNavigate(); // Initialize useNavigate

  const handleServiceSelection = (serviceName: string) => {
    // Toggle the selection (deselect if the same card is clicked)
    setSelectedService((prev) => (prev === serviceName ? null : serviceName));
  };

  const handleContinue = () => {
    if (selectedService) {
      // Navigate to /calendar if a service is selected
      navigate('/calendar');
    } else {
      alert('Please select a service before continuing.');
    }
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
            minWidth: 300,
            maxWidth: 600,
            width: '100%',
          }}
        >
          <Center>
            <UserButton />
          </Center>

          {/* Centered 'Select a service' */}
          <Center>
            <Text size="xl" fw={500}>
              Select a service
            </Text>
          </Center>

          <Divider my="lg" />

          {/* Render ServiceCards */}
          {servicesData.map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
              selected={selectedService === service.name}
              onChange={() => handleServiceSelection(service.name)}
            />
          ))}

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
