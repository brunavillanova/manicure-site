
import { useState } from "react";
import { X, ZoomIn, Sparkles, ArrowRight } from "lucide-react";
import "../styles/Gallery.css";

const WHATSAPP = "5511964070876";

const photos = [
  {
    id: 1,
    category: "Manicure",
    image: "/esmaltação.png",
    description: "Manicure delicada"
  },
  {
    id: 2,
    category: "Esmaltação em gel",
    image: "molde.png",
    description: "Esmaltação em gel"
  },
  {
    id: 3,
    category: "Manicure",
    image: "Molde F1.png",
    description: "Unhas elegantes"
  },
  {
    id: 4,
    category: "Alongamento",
    image: "vibra.png",
    description: "Alongamento personalizado"
  },
  {
    id: 5,
    category: "Esmaltação em gel",
    image: "molde2.png",
    description: "Nail art"
  },
  {
    id: 6,
    category: "Pedicure",
    image: "vibra1.png",
    description: "Cuidado especial"
  }
];

const categories = [
  "Todos",
  "Manicure",
  "Pedicure",
  "Esmaltação em gel",
  "Alongamento"
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredPhotos =
    selectedCategory === "Todos"
      ? photos
      : photos.filter(
          (photo) => photo.category === selectedCategory
        );

  return (
    <section className="gallery-section" id="galeria">

      <div className="gallery-header">
        <span className="gallery-label">
          <Sparkles size={15} />
          NOSSO TRABALHO
        </span>

        <h2>
          Inspiração em
          <br />
          <em>cada detalhe.</em>
        </h2>

        <p>
          Confira alguns dos nossos trabalhos e encontre
          a inspiração para suas próximas unhas.
        </p>
      </div>

      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "gallery-filter active"
                : "gallery-filter"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredPhotos.map((photo) => (
          <button
            className="gallery-item"
            key={photo.id}
            onClick={() => setSelectedPhoto(photo.image)}
            aria-label={`Ampliar foto: ${photo.description}`}
          >
            <img src={photo.image} alt={photo.description} />

            <div className="gallery-overlay">
              <span>{photo.category}</span>
              <ZoomIn size={25} />
            </div>
          </button>
        ))}
      </div>

      <div className="gallery-cta">
        <p>Gostou de algum modelo?</p>

        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            "Olá, Talita! Vi seus trabalhos e gostaria de agendar um horário."
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Quero agendar <ArrowRight size={17} />
        </a>
      </div>

      {selectedPhoto && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="gallery-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Fechar imagem"
          >
            <X size={28} />
          </button>

          <img
            src={selectedPhoto}
            alt="Trabalho de manicure ampliado"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

export default Gallery;
