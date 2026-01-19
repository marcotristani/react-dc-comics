import ListSocial from "../../assets/arrayJs/ListSocials";

const SignSocial = () => {
  return (
    <div className="container-button-social padding-x">
      <a href="">
        <button>SIGN-UP NOW!</button>
      </a>
      <div className="social-container">
        <span>FOLLOW US</span>
        {ListSocial.map((social) => (
          <a href={social.href} key={social.id}>
            <img src={social.src} alt={social.description} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SignSocial;
