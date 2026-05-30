const homes = [
  "Villa",
  "Penthouse",
  "Farmhouse",
  "Hospitality"
];

export default function ExceptionalHomes() {
  return (
    <section className="homes">

      <h2>
        Exceptional Homes.
      </h2>

      <h2 className="gold">
        Exceptional Air.
      </h2>

      <div className="homes-grid">

        {homes.map((home) => (

          <div
            key={home}
            className="home-tile"
          >
            {home}
          </div>

        ))}

      </div>

    </section>
  );
}