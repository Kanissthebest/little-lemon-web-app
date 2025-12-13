import { initializeTimes, updateTimes } from './Main';

const mockFetchAPI = jest.fn();

beforeEach(() => {
  // Mock globalThis.fetchAPI
  globalThis.fetchAPI = mockFetchAPI;
});

afterEach(() => {
  jest.clearAllMocks();
  delete globalThis.fetchAPI;
});

test('initializeTimes returns slots from fetchAPI', () => {
  const mockSlots = ['18:00', '19:00', '20:00'];
  mockFetchAPI.mockReturnValue(mockSlots);

  const slots = initializeTimes(new Date('2025-12-13'));
  expect(mockFetchAPI).toHaveBeenCalledWith(new Date('2025-12-13'));
  expect(slots).toEqual(mockSlots);
});

test('initializeTimes falls back to default slots when fetchAPI not available', () => {
  // Temporarily remove fetchAPI
  const originalFetchAPI = globalThis.fetchAPI;
  delete globalThis.fetchAPI;

  const slots = initializeTimes(null);
  expect(Array.isArray(slots)).toBe(true);
  expect(slots.length).toBeGreaterThan(0);
  expect(slots).toContain('17:00');

  // Restore
  globalThis.fetchAPI = originalFetchAPI;
});

test('updateTimes returns same state for unknown action', () => {
  const current = ['12:00'];
  const result = updateTimes(current, { type: 'noop' });
  expect(result).toBe(current);
});

test('updateTimes calls fetchAPI on dateChange', () => {
  const mockSlots = ['17:30', '18:30'];
  mockFetchAPI.mockReturnValue(mockSlots);

  const result = updateTimes([], { type: 'dateChange', date: '2025-12-14' });
  expect(mockFetchAPI).toHaveBeenCalledWith(new Date('2025-12-14'));
  expect(result).toEqual(mockSlots);
});
