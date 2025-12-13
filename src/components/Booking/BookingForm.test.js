import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { BookingTimesProvider } from '../Main';

test('renders BookingForm heading', () => {
  const mockFormData = { date: '', time: '17:00', guests: 1, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const headingElement = screen.getByText(/Booking options/i);
  expect(headingElement).toBeInTheDocument();
});
