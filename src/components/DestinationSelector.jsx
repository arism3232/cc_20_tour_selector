function DestinationSelector({tours, selectedDestination, onDestinationChange}) {
    // Extract unique destinations from tours
    const destinations = ['All Destinations', ...new Set(tours.map((tour) => tour.name))];
    
    return (
        <div className="destination-selector">
        <label htmlFor="destination">Select Destination:</label> {/* label for accessibility */}
        <select 
            id="destination" 
            value={selectedDestination} 
            onChange={(e) => onDestinationChange(e.target.value)}
        >
            {destinations.map((destination) => (
            <option key={destination} value={destination}>
                {destination}
            </option>
            ))} {/* rendering options for each destination */ }
        </select>
        </div>
    );
}
export default DestinationSelector;