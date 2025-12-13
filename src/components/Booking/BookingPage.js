import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
function BookingPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday'
    });
    
    const handleFormChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const submitForm = (formData) => {
        if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
            const result = window.submitAPI(formData);
            if (result) {
                navigate('/confirmed');
            } else {
                alert('Submission failed. Please try again.');
            }
        } else {
            // Fallback for testing
            navigate('/confirmed');
        }
    };

    return (
        <>
            <h1 style={{textAlign:'center', fontSize:'64px'}}>Booking Page</h1>
            <BookingForm formData={formData} onFormChange={handleFormChange} onSubmit={submitForm} />
        </>
    );
}
export default BookingPage;