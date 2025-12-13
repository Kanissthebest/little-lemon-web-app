import './Booking.css';
import { useContext } from 'react';
import { BookingTimesContext } from '../Main';

function BookingForm({ formData, onFormChange, onSubmit }) {
    const { availableTimes, dispatch } = useContext(BookingTimesContext);
    const bookingOccasionList = ["Birthday", "Anniversary", "Engagement", "Other"];

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        onFormChange('date', newDate);
        // inform reducer about date change so availableTimes can update
        if (dispatch) dispatch({ type: 'dateChange', date: newDate });
    };
    const handleTimeChange = (e) => onFormChange('time', e.target.value);
    const handleGuestsChange = (e) => onFormChange('guests', parseInt(e.target.value, 10));
    const handleOccasionChange = (e) => onFormChange('occasion', e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <div className="booking-container">
            <h1>Booking options</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-grid'>
                    <div>
                        <label htmlFor="res-date">Choose date</label>
                        <input
                            type="date"
                            id="res-date"
                            value={formData.date}
                            onChange={handleDateChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="res-time">Choose time</label>
                        <select
                            id="res-time"
                            value={formData.time}
                            onChange={handleTimeChange}
                            required
                        >
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="people-occasion-grid">
                    <div>
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            type="number"
                            id="guests"
                            value={formData.guests}
                            min="1"
                            max="10"
                            onChange={handleGuestsChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            value={formData.occasion}
                            onChange={handleOccasionChange}
                            required
                        >
                            {bookingOccasionList.map((occasion, index) => (
                                <option key={index} value={occasion}>{occasion}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit">Make Your reservation</button>
            </form>
        </div>
    );
}
export default BookingForm;