import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (

    <section
      className="hero"
      style={{
        backgroundImage:
        `url(${heroImage})`
      }}
    >

      <div className="overlay"/>

      <div className="hero-content">

        <span className="eyebrow">
          ARCHITECTURE OF AIR
        </span>

        <h1>
          The air inside your home
          deserves the same attention
          as everything else in it.
        </h1>

        <p>
          For homes that refuse to settle.
        </p>

        <button>
          Private Consultation
        </button>

      </div>

    </section>
  );
}