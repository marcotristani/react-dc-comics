import Comics from "../assets/arrayJs/Comics";
const MainContainer = () => {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="badge">CURRENT SERIES</div>
      <div className="container-cards padding-x">
        {Comics.map((comic) => (
          <div className="card" key={comic.id}>
            <figure>
              <img src={comic.thumb} alt={comic.description} />
            </figure>
            <figcaption>{comic.series.toUpperCase()}</figcaption>
          </div>
        ))}
      </div>
      <div className="button-load-more">
        <a href="#">
          <button>LOAD MORE</button>
        </a>
      </div>
    </main>
  );
};

export default MainContainer;
