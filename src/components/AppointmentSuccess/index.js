import "./index.css"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const AppointmentSuccess = () => { 
    const { id } = useParams();
    const [appointment, setAppointment] = useState(null);
    


    useEffect(() => {
        const fetchAppointment = async () => {
            console.log("Fetching appointment with ID:", id);
            try {
            const res = await fetch(`https://healthcare-backend-og2g.onrender.com/appointments/${id}`);
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            console.log("Fetched appointment data:", data);
            setAppointment(data);
            } catch (error) {
            console.error('Error fetching appointment:', error);
            }
        };

        fetchAppointment();
    }, [id]); // <-- include id here, not appointment or setAppointment


    
    if (!appointment) return <p>No appointment data found.</p>;
      return (
    <div className="success-container">
      <h1 className="success-heading">🎉 Appointment Successfully Submitted!</h1>
      <div className="appointment-info">
        <p><strong>Patient Name:</strong> {appointment.patientName}</p>
        <p><strong>Email:</strong> {appointment.patientEmail}</p>
        <p><strong>Date & Time:</strong> {appointment.datetime}</p>
        <p><strong>Doctor:</strong> {appointment.doctorName}</p>
        <p><strong>Specialty:</strong> {appointment.profession}</p>
        
        <p><strong>Phone:</strong> {appointment.phone_number}</p>
      </div>
    </div>
  );
}

export default AppointmentSuccess;
