// src/components/DoctorCard/index.jsx
import { FaVideo, FaClinicMedical } from 'react-icons/fa';

const DoctorCard = ({ doctor }) => {
  // Safe defaults
  const specialties = doctor.specialties || [];
  const photo = doctor.photo || 'https://via.placeholder.com/150';
  const name = doctor.name || 'Unknown Doctor';
  const experience = doctor.experience || 0;
  const fees = doctor.fees || 0;
  const introduction = doctor.introduction || '';
  const videoConsultation = doctor.video_consultation || false;
  const inClinic = doctor.in_clinic || false;

  return (
    <div className="doctor-card" data-testid="doctor-card">
      <div className="doctor-photo-container">
        <img 
          src={photo} 
          alt={name}
          className="doctor-photo"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150';
          }}
        />
      </div>
      <div className="doctor-info">
        <h3 className="doctor-name" data-testid="doctor-name">
          {name}
          {doctor.name_initials && (
            <span className="name-initials"> ({doctor.name_initials})</span>
          )}
        </h3>
        <div className="doctor-specialty" data-testid="doctor-specialty">
          {specialties.length > 0 ? specialties.join(', ') : 'No specialties listed'}
        </div>
        {introduction && (
          <div className="doctor-introduction">
            {introduction}
          </div>
        )}
        <div className="doctor-experience" data-testid="doctor-experience">
          Experience: {experience} years
        </div>
        <div className="doctor-fee" data-testid="doctor-fee">
          Fee: ₹{fees}
        </div>
        <div className="consultation-options">
          {videoConsultation && (
            <div className="consultation-option video-consult" data-testid="video-consult-option">
              <FaVideo className="consultation-icon" />
              <span>Video Consultation Available</span>
            </div>
          )}
          {inClinic && (
            <div className="consultation-option in-clinic" data-testid="clinic-consult-option">
              <FaClinicMedical className="consultation-icon" />
              <span>In-Clinic Visit Available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;