const MainHeader = () => {
  return (
    <header className="padding-x">
      <figure>
        <a href="">
          <img src="src/assets/img/dc-logo.png" alt="logo dc" />
        </a>
      </figure>
      <nav>
        <a href="">CHARACTERS</a>
        <a href="" className="nav-selected">
          COMICS
        </a>
        <a href="">MOVIES</a>
        <a href="">TV</a>
        <a href="">GAMES</a>
        <a href="">COLLECTIBLES</a>
        <a href="">VIDEOS</a>
        <a href="">FANS</a>
        <a href="">NEWS</a>
        <a href="">SHOP</a>
      </nav>
    </header>
  );
};

export default MainHeader;
