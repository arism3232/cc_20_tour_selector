import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';
import './App.css';

function App() {
  const [tours, setTours] = useState([]); // state for tours, filtered tours, loading state, error state, and selected destination
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  // Fetching tours from API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/react-tours-project'); // fetching tour data using vite proxy
        if (!response.ok) throw new Error('Failed to fetch tours');
        const data = await response.json();
        setTours(data);
        setFilteredTours(data); // Initially showing all tours
      } catch (err) {
        setError(err.message); // Setting error state if fetch fails
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  // Handling destination selection
  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
    if (destination === 'All Destinations') {
      setFilteredTours(tours); // showing all tours if 'All Destinations' is selected
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === destination)); // filtering tours based on selected destination
    }
  };

  // Removing a tour by ID
  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
    setFilteredTours(updatedTours.filter((tour) => 
      selectedDestination === 'All Destinations' || tour.name === selectedDestination
    ));
  };

  // Reseting tours
  const refreshTours = async () => {
    setLoading(true); // resetting loading state
    setError(null); // clearing error state
    try {
      const response = await fetch('/api/react-tours-project');
      if (!response.ok) throw new Error('Failed to fetch tours');
      const data = await response.json();
      setTours(data);
      setFilteredTours(data);
      setSelectedDestination('All Destinations'); // resetting selected tours and destination
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Our Tours</h1>
      <DestinationSelector 
        tours={tours} 
        selectedDestination={selectedDestination}
        onDestinationChange={handleDestinationChange} // rendering title and destination selector
      />
      <Gallery 
        tours={filteredTours} 
        loading={loading} 
        error={error} 
        removeTour={removeTour}
        refreshTours={refreshTours} // rendering gallery with filtered tours, loading state, error state, and remove tour function
      />
    </div>
  );
}

export default App;