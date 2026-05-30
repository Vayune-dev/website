import interiorImage from "../../assets/interior.jpg";

export default function DetailSection() {
  return (
    <section className="detail-section">

      <img
        src={interiorImage}
        alt="Luxury Interior"
        className="detail-image"
      />

      <div className="detail-overlay">

        <div className="detail-content">

          <p className="detail-label">
            THE DETAIL
          </p>

          <h2>
            You designed every detail.
          </h2>

          <h2 className="gold">
            Except the atmosphere.
          </h2>

        </div>

      </div>

    </section>
  );
}