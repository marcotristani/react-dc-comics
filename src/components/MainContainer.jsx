import comics from "../assets/arrayJs/comics";
const MainContainer = () => {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="badge">CURRENT SERIES</div>
      <div className="container-cards padding-x">
        {comics.map((comic) => (
          <div className="card" key={comic.id}>
            <figure>
              <img src={comic.thumb} alt={comic.description} />
            </figure>
            <figcaption>{comic.series.toUpperCase()}</figcaption>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContainer;
