
import { ArrowRight, Sparkles } from "lucide-react";
import "../styles/Services.css";

const WHATSAPP = "5511999999999";

const services = [
  {
    id: 1,
    name: "Manicure",
    description: "Cuidado especial para deixar suas mãos ainda mais bonitas.",
    price: "R$ 35,00",
    image:
      "image1.png",
    duration: "40 minutos",
  },
  {
    id: 2,
    name: "Pedicure",
    description: "Um momento de cuidado, beleza e relaxamento para seus pés.",
    price: "R$ 40,00",
    image:
      "pedicure.png",
    duration: "50 minutos",
  },
  {
    id: 3,
    name: "Esmaltação em Gel",
    description: "Unhas impecáveis com brilho e maior durabilidade.",
    price: "R$ 65,00",
    image:
      "image.png",
    duration: "60 minutos",
  },
  {
    id: 4,
    name: "Alongamento",
    description: "Unhas personalizadas para valorizar ainda mais sua beleza.",
    price: "R$ 120,00",
    image:
      "alonga.png",
    duration: "120 minutos",
  },
];

function Services() {
  const agendarServico = (nome: string) => {
    const mensagem = encodeURIComponent(
      `Olá, Talita! Gostaria de agendar o serviço: ${nome}. Poderia me informar os horários disponíveis?`
    );

    window.open(
      `https://wa.me/${WHATSAPP}?text=${mensagem}`,
      "_blank"
    );
  };

  return (
    <section className="services-section" id="servicos">
      <div className="services-header">
        <span className="section-label">
          <Sparkles size={15} />
          NOSSOS SERVIÇOS
        </span>

        <h2>
          Cuidados especiais
          <br />
          <em>para você.</em>
        </h2>

        <p>
          Escolha seu cuidado favorito e reserve um momento
          especial para você.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-image">
              <img src={service.image} alt={service.name} />

              <span className="service-duration">
                {service.duration}
              </span>
            </div>

            <div className="service-content">
              <h3>{service.name}</h3>

              <p>{service.description}</p>

              <div className="service-divider" />

              <div className="service-footer">
                <div>
                  <small>A partir de</small>
                  <strong>{service.price}</strong>
                </div>

                <button
                  onClick={() => agendarServico(service.name)}
                  className="service-button"
                >
                  Agendar
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="services-bottom">
        <span>♡</span>
        <p>
          Porque você merece um momento só seu.
        </p>
        <span>♡</span>
      </div>
    </section>
  );
}

export default Services;
