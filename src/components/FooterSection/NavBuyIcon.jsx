import NavBuyIconLinks from "../../assets/arrayJs/NavBuyIconLinks";

const NavBuyIcon = () => {
  return (
    <nav className="container-all-buy padding-x">
      {NavBuyIconLinks.map((link) => (
        <a href="#" className="cointainer-buy" key={link.id}>
          <img src={link.src} alt={link.title} className="icon-buy" />
          <div className="decription-buy">{link.title.toUpperCase()}</div>
        </a>
      ))}
    </nav>
  );
};

export default NavBuyIcon;
