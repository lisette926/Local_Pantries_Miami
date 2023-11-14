import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img
          alt="HeroImg"
          style={{ width: 1500, height: 600 }}
          src={props.heroImg}
        />
      </div>

      <div className="hero-text">
        <h2>{props.text}</h2>
      </div>
    </>
  );
}

export default Hero;
