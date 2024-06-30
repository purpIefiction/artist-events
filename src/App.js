import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [artist, setArtist] = useState('');
  const [events, setEvents] = useState([]);

  const handleSearch = () => {
    // Hier gaan we later de logica toevoegen om evenementen op te halen
    setEvents([
      { event: 'Concert in Amsterdam', date: '2024-07-15', location: 'Amsterdam, NL' },
      { event: 'Festival in London', date: '2024-08-20', location: 'London, UK' }
    ]);
  };

  return (
    <div className="container">
      <h1 className="my-4">Artist Events Finder</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Enter artist name"
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>Search</button>
      </div>
      <ul className="list-group">
        {events.map((event, index) => (
          <li key={index} className="list-group-item">
            <h5>{event.event}</h5>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
