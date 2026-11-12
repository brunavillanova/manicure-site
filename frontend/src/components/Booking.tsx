
import { useState } from "react";
import type { FormEvent } from "react";

import {
  CalendarDays,
  Clock,
  User,
  Phone,
  MessageCircle,
  Sparkles
} from "lucide-react";

import "../styles/Booking.css";

const WHATSAPP = "5511964070876";

const services = [
  "Manicure",
  "Pedicure",
  "Esmaltação em Gel",
  "Alongamento"
];

const availableTimes = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00"
];

function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Impede agendamentos em datas anteriores a hoje
  const today = new Date();

  const minimumDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  // Enviar solicitação para o WhatsApp
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !phone || !service || !date || !time) {
      alert("Preencha todos os campos para continuar.");
      return;
    }

    const [year, month, day] = date.split("-");

    const formattedDate = `${day}/${month}/${year}`;

    const message = `
Olá, Talita! Gostaria de solicitar um agendamento. 💗

👤 Nome: ${name}
📱 Telefone: ${phone}
💅 Serviço: ${service}
📅 Data: ${formattedDate}
🕒 Horário: ${time}

Aguardo a confirmação!
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="booking-section" id="agendamento">

      <div className="booking-container">

        {/* INFORMAÇÕES DO AGENDAMENTO */}
        <div className="booking-info">

          <span className="booking-label">
            <Sparkles size={15} />
            SEU MOMENTO ESPECIAL
          </span>

          <h2>
            Reserve seu
            <br />
            <em>momento de beleza.</em>
          </h2>

          <p>
            Escolha seu serviço, encontre o melhor horário
            e venha viver uma experiência especial na
            Talita Nails.
          </p>

          <div className="booking-benefits">

            <div>
              <CalendarDays />

              <span>
                <strong>Escolha sua data</strong>
                <small>
                  Selecione o melhor dia para você.
                </small>
              </span>
            </div>

            <div>
              <Clock />

              <span>
                <strong>Escolha seu horário</strong>
                <small>
                  Consulte os horários disponíveis.
                </small>
              </span>
            </div>

            <div>
              <MessageCircle />

              <span>
                <strong>Confirme pelo WhatsApp</strong>
                <small>
                  Envie sua solicitação diretamente.
                </small>
              </span>
            </div>

          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="booking-card">

          <div className="booking-card-header">
            <span>AGENDAMENTO ONLINE</span>

            <h3>Vamos agendar?</h3>

            <p>Preencha seus dados abaixo.</p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* NOME */}
            <div className="booking-field">

              <label>
                <User size={16} />
                Seu nome
              </label>

              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>

            {/* TELEFONE */}
            <div className="booking-field">

              <label>
                <Phone size={16} />
                WhatsApp
              </label>

              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

            </div>

            {/* SERVIÇO */}
            <div className="booking-field">

              <label>
                <Sparkles size={16} />
                Serviço desejado
              </label>

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >

                <option value="">
                  Selecione um serviço
                </option>

                {services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}

              </select>

            </div>

            {/* DATA */}
            <div className="booking-field">

              <label>
                <CalendarDays size={16} />
                Data desejada
              </label>

              <input
                type="date"
                min={minimumDate}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setTime("");
                }}
                required
              />

            </div>

            {/* HORÁRIOS */}
            <div className="booking-field">

              <label>
                <Clock size={16} />
                Escolha um horário
              </label>

              <div className="time-grid">

                {availableTimes.map((item) => (

                  <button
                    key={item}
                    type="button"
                    className={
                      time === item
                        ? "time-option selected"
                        : "time-option"
                    }
                    onClick={() => setTime(item)}
                    disabled={!date}
                  >
                    {item}
                  </button>

                ))}

              </div>

              {!date && (
                <small className="booking-hint">
                  Selecione uma data para escolher o horário.
                </small>
              )}

            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="booking-submit"
            >
              <MessageCircle size={19} />
              Solicitar agendamento
            </button>

            <small className="booking-disclaimer">
              Seu horário será confirmado pela Talita
              através do WhatsApp.
            </small>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Booking;
