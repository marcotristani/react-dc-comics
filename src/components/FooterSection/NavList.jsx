import NavListsLinks from "../../assets/arrayJs/NavListsLinks";

const NavList = () => {
  return (
    <div className="container-nav-list padding-x">
      <nav>
        {NavListsLinks.map((listLinks) => (
          <div className="col" key={listLinks.id}>
            <ul>{GenerateList(listLinks.links)}</ul>
          </div>
        ))}
      </nav>
      <figure>
        <img src="src/assets/img/dc-logo-bg.png" alt="logo dc" />
      </figure>
    </div>
  );
};

function GenerateList(list) {
  return list.map((link) => (
    <li key={link.id} className={link.title ? "title" : ""}>
      <a href={link.src}>{link.name}</a>
    </li>
  ));
}

export default NavList;
