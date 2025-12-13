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

// Tests for HTML5 validation attributes
test('date input has required and min attributes', () => {
  const mockFormData = { date: '', time: '17:00', guests: 1, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('min');
  expect(dateInput.getAttribute('min')).toMatch(/^\d{4}-\d{2}-\d{2}$/); // YYYY-MM-DD format
});

test('time select has required attribute', () => {
  const mockFormData = { date: '', time: '17:00', guests: 1, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute('required');
});

test('guests input has required, min and max attributes', () => {
  const mockFormData = { date: '', time: '17:00', guests: 1, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('occasion select has required attribute', () => {
  const mockFormData = { date: '', time: '17:00', guests: 1, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toHaveAttribute('required');
});

// Tests for form validation logic
test('submit button is disabled when form is invalid (empty date)', () => {
  const mockFormData = { date: '', time: '17:00', guests: 1, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('submit button is disabled when form is invalid (past date)', () => {
  const pastDate = '2020-01-01';
  const mockFormData = { date: pastDate, time: '17:00', guests: 1, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('submit button is disabled when form is invalid (no time)', () => {
  const today = new Date().toISOString().split('T')[0];
  const mockFormData = { date: today, time: '', guests: 1, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('submit button is disabled when form is invalid (guests too low)', () => {
  const today = new Date().toISOString().split('T')[0];
  const mockFormData = { date: today, time: '17:00', guests: 0, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('submit button is disabled when form is invalid (guests too high)', () => {
  const today = new Date().toISOString().split('T')[0];
  const mockFormData = { date: today, time: '17:00', guests: 15, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('submit button is disabled when form is invalid (no occasion)', () => {
  const today = new Date().toISOString().split('T')[0];
  const mockFormData = { date: today, time: '17:00', guests: 1, occasion: '' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('submit button is enabled when form is valid', () => {
  const today = new Date().toISOString().split('T')[0];
  const mockFormData = { date: today, time: '17:00', guests: 2, occasion: 'Birthday' };
  const mockOnFormChange = () => {};
  const mockOnSubmit = () => {};
  render(
    <BookingTimesProvider>
      <BookingForm formData={mockFormData} onFormChange={mockOnFormChange} onSubmit={mockOnSubmit} />
    </BookingTimesProvider>
  );
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeEnabled();
});
