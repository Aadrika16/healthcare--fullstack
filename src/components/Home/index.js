import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header';
import './index.css';

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("https://healthcare-backend-og2g.onrender.com/doctors");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        console.log(data);
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const getStatusClass = (status) => {
    if (status === 'Available Today') return 'status available';
    if (status === 'Fully Booked') return 'status booked';
    return 'status leave';
  };

  const filteredDoctors = search
    ? doctors.filter(doc =>
        doc.profession.toLowerCase().includes(search.toLowerCase())
      )
    : doctors;

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Doctors Directory</h1>

        <input
          type="text"
          placeholder="Search by profession (e.g., Gynecologist)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {filteredDoctors.length === 0 ? (
          <span className="search-icon">No doctors found</span>
        ) : (
          <span className="search-icon">{filteredDoctors.length} doctors found</span>
        )}

        <div className="doctors-list">
          {filteredDoctors.map((doc) => (
            <Link to={`/doctors/${doc.id}`} className="doctor-link" key={doc.id}>
              <div className="doctor-row">
                <img src={doc.image} alt={doc.name} className="doctor-img" />
                <div className="doctor-details">
                  <h2>{doc.name}</h2>
                  <p className="doctor-profession">{doc.profession}</p>
                  <p className={getStatusClass(doc.availability)}>{doc.availability}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
