
import {
  MessageCircle,
  MapPin,
  Clock,
  Heart,
  ArrowUp,
} from "lucide-react";

import "../styles/Footer.css";

const WHATSAPP = "5511964070876";
const INSTAGRAM =
  "https://www.instagram.com/talitanaill?psln=N2pnbXkzcnVidTVj";

// Ícone personalizado do Instagram
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
      />
    </svg>
  );
}

function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP}`;
  const instagramLink = INSTAGRAM;

  return (
    <footer className="footer">
      <div className="footer-main">

        {/* LOGO */}
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <span>Talita</span>
            <strong>Nails</strong>
            <small>BEAUTY & CARE</small>
          </a>

          <p>
            Beleza nos detalhes, elegância em você.
            Um momento especial de cuidado e carinho
            para valorizar sua beleza.
          </p>

          {/* REDES SOCIAIS */}
          <div className="footer-social">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="footer-column">
          <h3>Navegação</h3>

          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#agendamento">Agendamento</a>
        </div>

        {/* SERVIÇOS */}
        <div className="footer-column">
          <h3>Nossos serviços</h3>

          <a href="#servicos">Manicure</a>
          <a href="#servicos">Pedicure</a>
          <a href="#servicos">Esmaltação em gel</a>
          <a href="#servicos">Alongamento</a>
        </div>

        {/* CONTATO */}
        <div className="footer-column footer-contact">
          <h3>Entre em contato</h3>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-info"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-info"
          >
            <InstagramIcon size={16} />
            Instagram
          </a>

          <span>
            <Clock size={16} />
            Atendimento com horário marcado
          </span>

          <span>
            <MapPin size={16} />
            Localização a confirmar
          </span>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-button"
          >
            Falar com a Talita
          </a>
        </div>
      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Talita Nails.
          Todos os direitos reservados.
        </p>

        <p className="footer-made">
          Feito com <Heart size={13} />
          para realçar sua beleza.
        </p>

        <a href="#inicio" className="footer-top">
          Voltar ao topo
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
