import Comics from "../assets/arrayJs/Comics";
import ComponentCard from "./GenericComponentMain/ComponentCard";

const MainContainer = () => {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="badge">CURRENT SERIES</div>
      <div className="container-cards padding-x">
        {Comics.map((comic) => (
          <>
            <ComponentCard
              key={comic.id}
              title={comic.title}
              thumb={comic.thumb}
              price={comic.price}
              series={comic.series}
            >
              <div className="d-none">
                <h2>{comic.title}</h2>
                <p className="bold">{comic.writers}</p>
                <p>{comic.description}</p>
                <ul className="bold">
                  <li>{comic.sale_date}</li>
                  <li>{comic.artists}</li>
                </ul>
              </div>
            </ComponentCard>
          </>
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
