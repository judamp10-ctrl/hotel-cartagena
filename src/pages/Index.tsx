import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/cc/Hero";
import HeroEventos from "@/components/cc/HeroEventos";
import Nosotros from "@/components/cc/Nosotros";
import Valores from "@/components/cc/Valores";
import Hotel from "@/components/cc/Hotel";
import Eventos from "@/components/cc/Eventos";
import Cotizar from "@/components/cc/Cotizar";
import Galeria from "@/components/cc/Galeria";
import Contacto from "@/components/cc/Contacto";
import WhatsAppFab from "@/components/cc/WhatsAppFab";
import BottomNav, { NavLink } from "@/components/cc/BottomNav";
import CotizarModal from "@/components/cc/CotizarModal";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const LINKS: Record<"hotel" | "eventos", NavLink[]> = {
  hotel: [
    { id: "hotel-comfort", label: "Hotel Comfort" },
    { id: "galeria", label: "Galería" },
    { id: "contacto", label: "Contacto" },
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "valores", label: "El cambio" },
  ],
  eventos: [
    { id: "eventos-comfort", label: "Eventos Comfort" },
    { id: "galeria", label: "Galería" },
    { id: "contacto", label: "Contacto" },
    { id: "inicio", label: "Inicio" },
    { id: "cotizar", label: "Cotizar" },
  ],
};


const Index = () => {
  const [view, setView] = useState<"hotel" | "eventos">("hotel");
  const [modal, setModal] = useState(false);
  const links = LINKS[view];
  const active = useScrollSpy(links.map((l) => l.id), [view]);

  const switchView = () => {
    setView((v) => (v === "hotel" ? "eventos" : "hotel"));
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div id="top" className="min-h-screen bg-ink">
      <h1 className="sr-only">
        Cartagena Comfort — Hotel corporativo y centro de eventos en Cartagena
      </h1>

      <motion.main
        key={view}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={view === "hotel" ? "mesh-hotel noise-layer" : "mesh-eventos noise-layer"}
      >
        {view === "hotel" ? (
          <>
            <Hero onCotizar={() => setModal(true)} onSwitch={switchView} />
            <Nosotros />
            <Valores />
            <Hotel />
          </>
        ) : (
          <>
            <HeroEventos onCotizar={() => setModal(true)} onSwitch={switchView} />
            <Eventos />
            <Cotizar />
          </>
        )}
        <Galeria />
        <Contacto />
      </motion.main>

      <BottomNav
        links={links}
        active={active}
        switchLabel={view === "hotel" ? "Ir a Eventos Comfort →" : "← Ir a Hotel Comfort"}
        onSwitch={switchView}
      />
      <CotizarModal
        open={modal}
        onClose={() => setModal(false)}
        defaultServicio={view === "hotel" ? "Hotel" : "Eventos"}
      />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
