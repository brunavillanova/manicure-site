
import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle
} from "lucide-react";
import "../styles/Header.css";

const WHATSAPP = "5511964070876";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fecharMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <a href="#inicio" className="header-logo">
        <span>Talita</span>
        <strong>Nails</strong>
        <small>BEAUTY & CARE</small>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "header-nav active" : "header-nav"}>
        <a href="#inicio" onClick={fecharMenu}>Início</a>
        <a href="#sobre" onClick={fecharMenu}>Sobre</a>
        <a href="#servicos" onClick={fecharMenu}>Serviços</a>
        <a href="#galeria" onClick={fecharMenu}>Galeria</a>
        <a href="#contato" onClick={fecharMenu}>Contato</a>

        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="header-booking"
        >
          <MessageCircle size={17} />
          Agendar horário
        </a>
      </nav>
    </header>
  );
}

export default Header;
