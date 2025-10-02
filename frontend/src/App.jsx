import { useEffect, useState } from "react";
import PlaceCard from "./components/PlaceCard";
import "./App.css";

function App() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch places
  const fetchPlaces = async (query = "") => {
    let url = "http://localhost:5000/api/places";
    if (query) {
      url += `?search=${query}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    setPlaces(data);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPlaces(search);
  };

  return (
    <div className="app-container">
      <h1>Ahmedabad Tours</h1>

      {/* 🔎 Search Bar */}
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search places..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="places-grid">
        {places.length > 0 ? (
          places.map((place) => <PlaceCard key={place.id} place={place} />)
        ) : (
          <p>No places found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
