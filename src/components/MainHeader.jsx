import NavLinks from "../assets/arrayJs/NavHeaderLink";
import logo from "../assets/img/dc-logo.png";

const MainHeader = () => {
  return (
    <header className="padding-x">
      <figure>
        <a href="">
          <img src={logo} alt="logo dc" />
        </a>
      </figure>
      <nav>
        <ul>
          {NavLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.src}
                className={link.selected ? "nav-selected" : ""}
              >
                {link.name.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
