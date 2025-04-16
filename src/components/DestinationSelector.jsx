function DestinationSelector({tours, selectedDestination, onDestinationChange}) {
    // Extract unique destinations from tours
    const destinations = ['All Destinations', ...new Set(tours.map((tour) => tour.name))];
    
    return (
        <div className="destination-selector">
        <label htmlFor="destination">Select Destination:</label>
        <select 
            id="destination" 
            value={selectedDestination} 
            onChange={(e) => onDestinationChange(e.target.value)}
        >
            {destinations.map((destination, index) => (
            <option key={index} value={destination}>
                {destination}
            </option>
            ))}
        </select>
        </div>
    );
}
export default DestinationSelector;