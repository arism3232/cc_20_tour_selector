function TourCard({ tour, removeTour}) {
    const { id, name, info, image, price } = tour;

    return (
        <article className="tour-card">
            <img src={image} alt={name} className="tour-image" /> {/* displaying tour image */ }
            <div className="tour-info">
                <h3>{name}</h3> {/* displaying tour name */ }
                <p>{info}</p> {/* displaying tour info */ }
                <p className="tour-price">${price}</p> {/* displaying tour price */ }
                <button
                onClick={() => removeTour(id)}
                className="not-interested-btn"
                >
                    Not Interested
                </button> {/* button to remove tour */ }
            </div>
        </article>
    );
}
export default TourCard;