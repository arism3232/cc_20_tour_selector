function TourCard({ tour, removeTour}) {
    const { id, name, info, image, price } = tour;

    return (
        <article className="tour-card">
            <img src={image} alt={name} className="tour-image" />
            <div className="tour-info">
                <h3>{name}</h3>
                <p>{info}</p>
                <p className="tour-price">${price}</p>
                <button
                onClick={() => removeTour(id)}
                className="not-interested-btn"
                >
                    Not Interested
                </button>
            </div>
        </article>
    );
}
export default TourCard;