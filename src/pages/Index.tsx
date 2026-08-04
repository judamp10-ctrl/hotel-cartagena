import Hero from "@/components/cc/Hero";
import Navbar from "@/components/cc/Navbar";
import Valores from "@/components/cc/Valores";
import Hotel from "@/components/cc/Hotel";
import Eventos from "@/components/cc/Eventos";
import Cotizar from "@/components/cc/Cotizar";
import Galeria from "@/components/cc/Galeria";
import Contacto from "@/components/cc/Contacto";
import WhatsAppFab from "@/components/cc/WhatsAppFab";

const Index = () => (
  <div id="top" className="min-h-screen bg-background">
    <Navbar />
    <main>
      <h1 className="sr-only">
        Cartagena Comfort — Hotel corporativo y centro de eventos en Cartagena
      </h1>
      <Hero />
      <Valores />
      <Hotel />
      <Eventos />
      <Cotizar />
      <Galeria />
    </main>
    <Contacto />
    <WhatsAppFab />
  </div>
);

export default Index;
