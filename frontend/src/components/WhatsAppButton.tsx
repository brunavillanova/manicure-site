
import { MessageCircle } from "lucide-react";
import "../styles/WhatsAppButton.css";

function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/5511964070876?text=Ol%C3%A1%2C%20Talita!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Talita pelo WhatsApp"
      title="Fale com a Talita"
    >
      <MessageCircle size={27} />
    </a>
  );
}

export default WhatsAppButton;
