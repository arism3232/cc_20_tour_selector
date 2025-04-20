import TourCard from "./TourCard";

function Gallery({ tours, loading, error, removeTour, refreshTours}) {
    if (loading) {
        return <div className="loading">Loading tours...</div>;
    } // showing loading message while fetching tours

    if (error) {
        return <div className="error">Error: {error}</div>;
    } // showing error message if fetching tours fails

    if (tours.length === 0) {
        return ( // showing no-tours message if no tours are left
            <div className="no-tours">
                <h2>No tours left. Refresh to reload</h2>
                <button onClick={refreshTours} className="refresh-btn">
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
            ))}
        </div>
    ); // rendering tour cards for each tour
}
export default Gallery;