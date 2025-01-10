import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

// Dummy job locations for demonstration
const nearestJobs = [
  { id: 1, title: "Cleaning", location: "3 km", payment: 600, lat: 4.054, lon: 39.669 },
  { id: 2, title: "Plumbing", location: "5 km", payment: 1200, lat: 4.057, lon: 39.671 }
];

function NearestJobs() {
  const [userLocation, setUserLocation] = useState(null);

  // Function to get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          alert("Error getting location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Function to open Google Maps and get directions
  const getDirections = (jobLat, jobLon) => {
    if (userLocation) {
      const userLat = userLocation.lat;
      const userLon = userLocation.lon;

      const googleMapsURL = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLon}&destination=${jobLat},${jobLon}&travelmode=driving`;

      // Open Google Maps directions in a new tab
      window.open(googleMapsURL, "_blank");
    } else {
      alert("Unable to get your location.");
    }
  };

  useEffect(() => {
    // Get user's location when the component mounts
    getUserLocation();
  }, []);

  return (
    <section className="nearest-jobs">
      <h2>Nearest Jobs</h2>
      <div className="job-list">
        {nearestJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-details">
              {<FaMapMarkerAlt />}
              <h3>{job.title}</h3>
              <p>Distance: {job.location}</p>
              <p>Payment: Ksh {job.payment}</p>
            </div>

            <button
              className="btn-directions"
              onClick={() => getDirections(job.lat, job.lon)}
            >
              Get Directions
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NearestJobs;
