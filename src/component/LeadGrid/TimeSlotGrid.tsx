import { Text, UnstyledButton, Center } from '@mantine/core';
import classes from '../ImageCheckboxes/ImageCheckboxes.module.css';
import { useState } from 'react';

const timeSlots = [
  '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', 
  '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'
];

export function TimeSlotSelection() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const handleTimeSlotSelection = (timeSlot: string) => {
    setSelectedTimeSlot((prev) => (prev === timeSlot ? null : timeSlot));
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '12px' 
    }}>
      {timeSlots.map((timeSlot) => (
        <UnstyledButton
          key={timeSlot}
          className={classes.button}
          onClick={() => handleTimeSlotSelection(timeSlot)}
          style={{
            padding: '7px',
            borderRadius: '8px',
            border: selectedTimeSlot === timeSlot ? '2px solid #228BE6' : '1px solid #ddd',
            backgroundColor: selectedTimeSlot === timeSlot ? '#E8F0FE' : '#fff',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          <Center>
          <Text size="sm" fw={500} color={selectedTimeSlot === timeSlot ? 'blue' : 'black'}>
            {timeSlot}
          </Text>
          </Center>
        </UnstyledButton>
      ))}
    </div>
  );
}

export function TimeSlotGrid() {
  return (
    <div
      style={{
        padding: '0px',
        justifyContent: 'space-evenly',
        justifyItems: 'stretch',
        alignItems: 'center',
        alignContent: 'center'

      }}
    >
      <TimeSlotSelection />
    </div>
  );
}