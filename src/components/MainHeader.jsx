const navLinks = [
  {
    id: 1,
    name: "Characters",
    src: "#",
    selected: false,
  },
  {
    id: 2,
    name: "Comics",
    src: "#",
    selected: true,
  },
  {
    id: 3,
    name: "Movies",
    src: "#",
    selected: false,
  },
  {
    id: 4,
    name: "TV",
    src: "#",
    selected: false,
  },
  {
    id: 5,
    name: "Games",
    src: "#",
    selected: false,
  },
  {
    id: 6,
    name: "Collectibles",
    src: "#",
    selected: false,
  },
  {
    id: 7,
    name: "Videos",
    src: "#",
    selected: false,
  },
  {
    id: 8,
    name: "Fans",
    src: "#",
    selected: false,
  },
  {
    id: 9,
    name: "News",
    src: "#",
    selected: false,
  },
  {
    id: 10,
    name: "Shop",
    src: "#",
    selected: false,
  },
];

const MainHeader = () => {
  return (
    <header className="padding-x">
      <figure>
        <a href="">
          <img src="src/assets/img/dc-logo.png" alt="logo dc" />
        </a>
      </figure>
      <nav>
        <ul>
          {navLinks.map((link) => (
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
