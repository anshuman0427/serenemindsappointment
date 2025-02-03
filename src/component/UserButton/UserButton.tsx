import { Avatar, Group, Text, UnstyledButton, Center } from '@mantine/core';
import classes from './UserButton.module.css';

export function UserButton() {
  return (
    <Center>
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Kritika Srivastava
          </Text>

          <Text c="dimmed" size="xs">
            Counselling Psychologist
          </Text>
        </div>

        
      </Group>
    </UnstyledButton>
    </Center>
  );
}
