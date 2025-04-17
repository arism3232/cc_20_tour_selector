import TourCard from "./TourCard";

function Gallery({ tours, loading, error, removeTour, refreshTours}) {
    if (loading) {
        return <div className="loading">Loading tours...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (tours.length === 0) {
        return (
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
    );
}
export default Gallery;