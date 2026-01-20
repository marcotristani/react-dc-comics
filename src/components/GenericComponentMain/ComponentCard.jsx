const ComponentCard = (props) => {
  const { id, thumb, description, price, series } = props;
  return (
    <div className="card">
      <figure>
        <img src={thumb} alt={description} />
        <div className="activate-hover">
          <h4>{price}</h4>
        </div>
      </figure>
      <figcaption>{series.toUpperCase()}</figcaption>
    </div>
  );
};

export default ComponentCard;
