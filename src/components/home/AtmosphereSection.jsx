import atmosphereImage from "../../assets/atmosphere.jpg";

export default function AtmosphereSection() {
  return (
    <section className="atmosphere">

      <div className="atmosphere-image">

        <img
          src={atmosphereImage}
          alt="Himalayan Atmosphere"
        />

      </div>

      <div className="atmosphere-content">

        <span className="section-label">
          THE ATMOSPHERE
        </span>

        <div className="aqi-number">
          11
        </div>

        <div className="aqi-label">
          AQI
        </div>

        <p className="aqi-subtitle">
          Inspired by the purity of the
          Himalayan foothills.
        </p>

        <h2>
          Luxury isn't complete
        </h2>

        <h2 className="gold">
          until the atmosphere
          is designed.
        </h2>

      </div>

    </section>
  );
}