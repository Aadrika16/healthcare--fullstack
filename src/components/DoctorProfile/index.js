import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './index.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`https://healthcare-backend-og2g.onrender.com/doctors/${id}`);
        if (!response.ok) throw new Error("Doctor not found");
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };

    fetchDoctor();
  }, [id]);

  const getButton = (status, doctorId) => {
    if (status === 'Available Today') {
      return (
        <Link to={`/book/${doctor.id}`}>
          <button className="book-btn available">Book Appointment</button>
        </Link>
      );
    } else if (status === 'Fully Booked') {
      return <button className="book-btn booked" disabled>Unable to Book</button>;
    } else {
      return <button className="book-btn leave" disabled>Not Available</button>;
    }
 };
  if (!doctor) return <div>Loading doctor profile...</div>;

  return (
    <div className="profile-container">
      <Link to="/" className="back-button">← Back</Link>
      <div className="profile-card">
        <img src={doctor.image} alt={doctor.name} className="profile-img" />
        <div className="profile-info">
          <h2>{doctor.name}</h2>
          <p className="profession"><strong>Profession:</strong> {doctor.profession}</p>
          <p className="availability"><strong>Availability:</strong> {doctor.availability}</p>
          <p className="experience"><strong>Experience:</strong> {doctor.experience} + years</p>
          <p className="phone"><strong>Phone:</strong> {doctor.phone_number}</p>
          <p className="location"><strong>Location:</strong> {doctor.location}</p>

          {/* Highlighted Button */}
          <div className="button-container">
            {getButton(doctor.availability)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
