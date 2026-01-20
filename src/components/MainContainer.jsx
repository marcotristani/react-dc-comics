import Comics from "../assets/arrayJs/Comics";
import ComponentCard from "./GenericComponentMain/ComponentCard";

const MainContainer = () => {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="badge">CURRENT SERIES</div>
      <div className="container-cards padding-x">
        {Comics.map((comic) => (
          <ComponentCard
            key={comic.id}
            id={comic.id}
            description={comic.description}
            thumb={comic.thumb}
            price={comic.price}
            series={comic.series}
          />
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
