import './Booking.css';
function Booking() {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const peopleOptions = [
        { label: "A couple", value: "1" },
        { label: "Small group (3-4)", value: "3-4" },
        { label: "Large group (5+)", value: "5-6" },
        { label: "7-10 people", value: "7-10" },
    ];
    const bookingOccasions = [
        "Birthday",
        "Anniversary",
        "Engagement",
        "Other",
    ];
    return (
        <div className="booking-container">
            <h1>Reserve a table</h1>
       <form>
          <div>
            <label htmlFor="full-name" >Full name</label>
            <input type="text" className='fullfied' id="full-name" name="full-name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" className='fullfied' id="email" name="email" required />
          </div>
          <div className='form-grid'>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" className='fullfied' id="date" name="date" required />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <select id="time" name="time" required>
                    {times.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>
            </div>
          </div>
          <div className="people-occasion-grid">
             <div>
                <label>Number of people</label>
                <div>
                    {peopleOptions.map((option, index) => (
                        <div key={index}>
                            <input type="radio" id={option.label} name="people" value={option.value} required />
                            <label htmlFor={option.label}>{option.label}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" required>
                    {bookingOccasions.map((occasion, index) => (
                        <option key={index} value={occasion}>{occasion}</option>
                    ))}
                </select>
            </div>
          </div>
          <div>
            <button type="submit">Book now</button>
            </div>
       </form>
        </div>
    );
}
export default Booking;