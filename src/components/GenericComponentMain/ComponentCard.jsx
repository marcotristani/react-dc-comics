const ComponentCard = (props) => {
  const { thumb, title, price, series, children } = props;
  return (
    <div className="card">
      <figure>
        <img src={thumb} alt={title} />
        <div className="activate-hover">
          <h4>{price}</h4>
        </div>
      </figure>
      <input type="checkbox" id="miaCheckbox" />
      <span className="series">{series.toUpperCase()}</span>
      {children}
    </div>
  );
};

export default ComponentCard;
