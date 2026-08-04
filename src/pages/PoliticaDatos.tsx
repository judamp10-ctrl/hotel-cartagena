import { Link } from "react-router-dom";
import { CONTACTO } from "@/data/cartagenaComfort";

const PoliticaDatos = () => (
  <main className="min-h-screen bg-background py-24">
    <div className="mx-auto max-w-3xl px-6">
      <Link to="/" className="label-eyebrow text-gold">
        ← Volver al inicio
      </Link>
      <h1 className="mt-8 font-serif text-4xl text-primary">
        Política de Tratamiento de Datos Personales
      </h1>
      <div className="gold-rule mt-6 h-px w-20" />

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          En cumplimiento de la Ley 1581 de 2012 y el Decreto 1074 de 2015, Cartagena Comfort —
          Hotel &amp; Eventos informa la política aplicable al tratamiento de los datos personales
          recolectados a través de este sitio web.
        </p>

        <h2 className="pt-4 font-serif text-xl text-primary">1. Responsable</h2>
        <p>
          Cartagena Comfort — Hotel &amp; Eventos, con domicilio en {CONTACTO.direccion}. Canales
          de contacto: {CONTACTO.hotel.email} (hospedaje) y {CONTACTO.eventos.email} (eventos).
        </p>

        <h2 className="pt-4 font-serif text-xl text-primary">2. Datos recolectados</h2>
        <p>
          Nombre completo, número de WhatsApp, tipo de evento, fecha tentativa, número de
          asistentes y, de forma opcional, tipo y número de identificación para facturación.
        </p>

        <h2 className="pt-4 font-serif text-xl text-primary">3. Finalidad</h2>
        <p>
          Los datos se utilizan exclusivamente para atender solicitudes de cotización y reserva,
          emitir facturación cuando corresponda y mantener comunicación comercial sobre el
          servicio solicitado. No se comercializan ni se transfieren a terceros no vinculados a la
          prestación del servicio.
        </p>

        <h2 className="pt-4 font-serif text-xl text-primary">4. Derechos del titular</h2>
        <p>
          El titular puede conocer, actualizar, rectificar y suprimir sus datos, así como revocar
          la autorización otorgada, escribiendo a los correos indicados. La solicitud será
          atendida en los términos legales vigentes.
        </p>

        <h2 className="pt-4 font-serif text-xl text-primary">5. Autorización</h2>
        <p>
          Al marcar la casilla de autorización en el formulario de cotización, el titular declara
          conocer y aceptar esta política de forma libre, previa e informada.
        </p>
      </div>
    </div>
  </main>
);

export default PoliticaDatos;
