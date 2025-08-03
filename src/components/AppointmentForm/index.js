import { useState } from "react"; 
import { useParams, Link } from 'react-router-dom';
import './index.css';

const AppointmentForm = () => {
    const { id } = useParams();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [datetime, setdatetime] = useState(''); 
    const [error, setError] = useState('');
    const [appointmentId, setAppointmentId] = useState(null);
    

    const onChangeSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = 'https://healthcare-backend-og2g.onrender.com/appointments';
        const appointmentData = {
            doctorId: parseInt(id, 10),
            name,
            email,
            datetime
        };
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointmentData)
            });
            if (!response.ok) throw new Error('Failed to book appointment');
            const data = await response.json();
            console.log('Appointment booked successfully:', data);
            setname('');
            setemail('');
            setdatetime('');
            setError('');
            setAppointmentId(data.appointmentId); // store ID to use in link
        } catch (error) {
            setError(error.message);
        }
    };

    // Show success screen if booked
    if (appointmentId) {
        return (
            <div className="success-message">
                <h2>Appointment booked successfully!</h2>
                <p>Thank you for booking your appointment with Doctor ID: {id}.</p>
                <Link to={`/appointment-success/${appointmentId}`} className="success-link">View Appointment Details</Link>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={onChangeSubmit}>
                <h2>Book Appointment with Doctor {id}</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} required />
                </div>
                <div>
                    <label>Date and Time:</label>
                    <input type="datetime-local" value={datetime} onChange={(e) => setdatetime(e.target.value)} required />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Link to={`/doctors/${id}`} className="back-button">← Back</Link>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
