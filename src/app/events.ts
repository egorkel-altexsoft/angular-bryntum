export const events = [
  {
    id: 'e1',
    startDate: new Date(2023, 9, 25, 9),
    endDate: new Date(2023, 9, 25, 12),
    name: 'Multi assigned',
    type: 'multi',
    resourceIds: ['r1', 'r2', 'r5'] // Doesn't work
  },
  {
    id: 'e2',
    startDate: new Date(2023, 9, 25, 8),
    endDate: new Date(2023, 9, 25, 10),
    name: 'Single assigned',
    type: 'single',
    resourceId: 'r3' // Works
    // resourceIds: ['r3'] // Doesn't work
  },
  {
    id: 'e3',
    startDate: new Date(2023, 9, 25, 15),
    endDate: new Date(2023, 9, 25, 20),
    name: 'Single assigned',
    type: 'single',
    resourceId: 'r4' // Works
    // resourceIds: ['r4'] // Doesn't work
  }
];
