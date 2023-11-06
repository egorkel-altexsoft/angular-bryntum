export const events = [
  {
    id: 'e1',
    startDate: new Date(2023, 9, 25, 9),
    endDate: new Date(2023, 9, 25, 12),
    name: 'Multi assigned',
    type: 'multi',
    resourceIds: ['r1', 'r2', 'r5'],
    recurrenceRule: 'FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=4;COUNT=5;'
  },
  {
    id: 'e2',
    startDate: new Date(2023, 9, 25, 8),
    endDate: new Date(2023, 9, 25, 10),
    name: 'Single assigned',
    type: 'single',
    resourceId: 'r3'
  },
  {
    id: 'e3',
    startDate: new Date(2023, 9, 25, 15),
    endDate: new Date(2023, 9, 25, 20),
    name: 'Single assigned',
    type: 'single',
    resourceId: 'r4'
  }
];
