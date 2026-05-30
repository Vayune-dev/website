import villa from "../../assets/homes/villa.jpg";
import penthouse from "../../assets/homes/penthouse.jpg";
import farmhouse from "../../assets/homes/farmhouse.jpg";
import hospitality from "../../assets/homes/hospitality.jpg";

const homes = [
  {
    title: "Villa",
    image: villa,
  },
  {
    title: "Penthouse",
    image: penthouse,
  },
  {
    title: "Farmhouse",
    image: farmhouse,
  },
  {
    title: "Hospitality",
    image: hospitality,
  },
];

export default function ExceptionalHomes() {
  return (
    <section className="homes">

      <div className="homes-header">
        <h2>Exceptional Homes.</h2>
        <h2 className="gold">
          Exceptional Air.
        </h2>
      </div>

      <div className="homes-grid">

        {homes.map((home) => (
          <div
            key={home.title}
            className="home-tile"
          >

            <img
              src={home.image}
              alt={home.title}
            />

            <div className="home-overlay" />

            <h3>{home.title}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}