
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import "../styles/Services.css";

const WHATSAPP = "5511964070876";

const featuredServices = [
  {
    id: 1,
    name: "Manicure",
    description: "Cuidado especial para deixar suas mãos ainda mais bonitas.",
    price: "R$ 35,00",
    image: "/image1.png",
    duration: "40 minutos",
  },
  {
    id: 2,
    name: "Pedicure",
    description: "Um momento de cuidado, beleza e relaxamento para seus pés.",
    price: "R$ 45,00",
    image: "/pedicure.png",
    duration: "50 minutos",
  },
  {
    id: 3,
    name: "Esmaltação em Gel",
    description: "Unhas impecáveis com brilho e maior durabilidade.",
    price: "R$ 55,00",
    image: "/image.png",
    duration: "60 minutos",
  },
  {
    id: 4,
    name: "Alongamento",
    description: "Unhas personalizadas para valorizar ainda mais sua beleza.",
    price: "A partir de R$ 70,00",
    image: "/alonga.png",
    duration: "120 minutos",
  },
];

const categories = [
  {
    id: 1,
    title: "Básico",
    subtitle: "Cuidados essenciais para suas mãos e pés",
    services: [
      { name: "Manicure", price: "R$ 35,00" },
      { name: "Pedicure", price: "R$ 45,00" },
      { name: "Manicure & Pedicure", price: "R$ 55,00" },
      { name: "4 mãos + 2 pés", price: "R$ 140,00" },
      { name: "Esmaltação em Gel", price: "R$ 55,00" },
      {
        name: "SPA dos Pés",
        price: "R$ 90,00",
        detail: "Hidromassagem + esfoliação + hidratação + pedicure",
      },
    ],
  },
  {
    id: 2,
    title: "Aplicação",
    subtitle: "Técnicas para unhas bonitas e resistentes",
    services: [
      { name: "Molde F1", price: "R$ 115,00" },
      { name: "Fibra de vidro", price: "R$ 140,00" },
      { name: "Banho de gel", price: "R$ 80,00" },
      { name: "Blindagem", price: "R$ 70,00" },
    ],
  },
  {
    id: 3,
    title: "Manutenções",
    subtitle: "Valores conforme o período da manutenção",
    services: [
      { name: "Molde F1 — 15 dias", price: "R$ 70,00" },
      { name: "Molde F1 — 20 dias", price: "R$ 90,00" },
      { name: "Fibra de vidro — 15 dias", price: "R$ 90,00" },
      { name: "Fibra de vidro — 20 dias", price: "R$ 110,00" },
    ],
  },
  {
    id: 4,
    title: "Extras",
    subtitle: "Serviços adicionais",
    services: [
      { name: "Remoção", price: "R$ 60,00" },
      { name: "Unha quebrada", price: "R$ 20,00" },
      { name: "Troca de Esmaltação em Gel", price: "R$ 35,00" },
    ],
  },
];

function openWhatsApp(serviceName: string, price?: string) {
  const mensagem = encodeURIComponent(
    `Olá, Talita! Gostaria de agendar: ${serviceName}.${price ? ` Valor informado: ${price}.` : ""} Poderia me informar os horários disponíveis?`
  );

  window.open(
    `https://wa.me/${WHATSAPP}?text=${mensagem}`,
    "_blank",
    "noopener,noreferrer"
  );
}

function Services() {
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

      {/* Cards com fotos */}
      <div className="services-grid">
        {featuredServices.map((service) => (
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
                  <small>
                    {service.id === 4 ? "Valor inicial" : "Valor"}
                  </small>
                  <strong>{service.price}</strong>
                </div>

                <button
                  onClick={() =>
                    openWhatsApp(service.name, service.price)
                  }
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

      {/* Tabela completa de preços */}
      <div className="price-list-section">
        <div className="price-list-header">
          <span className="section-label">
            <Sparkles size={15} />
            TABELA DE VALORES
          </span>

          <h2>
            Nossos valores
            <br />
            <em>com carinho para você.</em>
          </h2>

          <p>
            Confira todos os serviços, aplicações, manutenções
            e valores disponíveis.
          </p>
        </div>

        <div className="price-list-grid">
          {categories.map((category) => (
            <article className="price-category" key={category.id}>
              <div className="price-category-heading">
                <span>0{category.id}</span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>
              </div>

              <div className="price-items">
                {category.services.map((service) => (
                  <div className="price-item" key={service.name}>
                    <div className="price-item-info">
                      <strong>{service.name}</strong>

                      {"detail" in service && service.detail && (
                        <small>{service.detail}</small>
                      )}
                    </div>

                    <div className="price-item-action">
                      <strong className="price-value">
                        {service.price}
                      </strong>

                      <button
                        className="price-book-button"
                        onClick={() =>
                          openWhatsApp(service.name, service.price)
                        }
                        aria-label={`Agendar ${service.name}`}
                        title={`Agendar ${service.name}`}
                      >
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="services-bottom">
        <Heart size={16} />
        <p>Porque você merece um momento só seu.</p>
        <Heart size={16} />
      </div>
    </section>
  );
}

export default Services;
