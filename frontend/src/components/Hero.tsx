
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import "../styles/Hero.css";

const WHATSAPP = "5511964070876";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">

        <span className="hero-label">
          <Sparkles size={16} />
          SEU MOMENTO DE AUTOCUIDADO
        </span>

        <h1>
          Beleza nos detalhes,
          <br />
          <em>elegância em você.</em>
        </h1>

        <p>
          Suas unhas merecem um cuidado especial.
          Viva uma experiência de beleza, delicadeza
          e sofisticação com a Talita Nails.
        </p>

        <div className="hero-actions">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, Talita! Gostaria de agendar um horário.")}`}
            target="_blank"
            rel="noreferrer"
            className="hero-primary"
          >
            <MessageCircle size={18} />
            Agendar pelo WhatsApp
          </a>

          <a href="#servicos" className="hero-secondary">
            Conhecer serviços
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="hero-benefits">
          <span>♡ Atendimento especial</span>
          <span>✧ Beleza e cuidado</span>
        </div>

      </div>

      <div className="hero-visual">
        <img
          src="vibra.png"
          alt="Manicure com esmaltação delicada"
        />

        <div className="hero-caption">
          <span>Talita Nails</span>
          <small>Um toque de delicadeza</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;
