import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import '@mantine/dates/styles.css';

export function Demo() {
  const [selected, setSelected] = useState<Date | null>(null);

  const handleSelect = (date: Date) => {
    const isSelected = selected && dayjs(date).isSame(selected, 'date');
    if (isSelected) {
      setSelected(null); // Deselect if the same date is clicked again
    } else {
      setSelected(date); // Select new date
    }
  };

  return (
    <Calendar
      style={{
        width: '100%', // Fill the width of the parent container
        height: '100%', // Fill the height of the parent container
      }}
      getDayProps={(date) => ({
        selected: selected ? dayjs(date).isSame(selected, 'date') : false,
        onClick: () => handleSelect(date),
      })}
    />
  );
}