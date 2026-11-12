
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;
