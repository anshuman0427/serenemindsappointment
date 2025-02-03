import { Container, Grid } from '@mantine/core';
import { Demo } from './Cal';
import { TimeSlotGrid } from './TimeSlotGrid';

const PRIMARY_COL_HEIGHT = '300px';

export function LeadGrid() {
  return (
    <Container my="md">
      {/* Use Grid to place two sections side by side */}
      <Grid gutter="md">
        {/* First Section: Responsive Date Picker Calendar */}
        <Grid.Col span={{ base: 12, md: 7 }}> {/* 75% on desktop, 100% on mobile */}
          <div
            style={{
              height: PRIMARY_COL_HEIGHT,
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              padding: '16px',
              overflow: 'hidden',
              display: 'flex', // Ensure the calendar fills the container
              alignItems: 'center', // Center the calendar vertically
              justifyContent: 'center', // Center the calendar horizontally
            }}
          >
            <Demo />
          </div>
        </Grid.Col>

        {/* Second Section: Placeholder Skeleton */}
        <Grid.Col span={{ base: 12, md: 5 }}> {/* 25% on desktop, 100% on mobile */}
          <div
            style={{
              height: PRIMARY_COL_HEIGHT,
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              padding: '16px',
            }}
          >
            <TimeSlotGrid/>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}