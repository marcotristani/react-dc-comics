const MainHeader = () => {
  return (
    <header className="padding-x">
      <figure>
        <img src="src/assets/img/dc-logo.png" alt="logo dc" />
      </figure>
      <nav>
        <ul>
          <li>CHARACTERS</li>
          <li className="nav-selected">COMICS</li>
          <li>MOVIES</li>
          <li>TV</li>
          <li>GAMES</li>
          <li>COLLECTIBLES</li>
          <li>VIDEOS</li>
          <li>FANS</li>
          <li>NEWS</li>
          <li>SHOP</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
