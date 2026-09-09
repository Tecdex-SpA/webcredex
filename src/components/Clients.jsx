/**
 * ============================================================================
 * NO MONTAR ESTE COMPONENTE.  Anotado el 2026-09-01.
 * ============================================================================
 *
 * Hoy este archivo NO SE MONTA EN NINGUNA PARTE, y asi debe seguir. Una sola
 * linea en App.jsx publica los TRECE nombres y los TRECE logos de golpe.
 *
 * POR QUE. NINGUNA de las empresas nombradas aca tiene autorizacion escrita
 * para ser nombrada por Credex. Tener contrato NO es tener autorizacion para
 * usar el nombre en material publico: son dos cosas distintas.
 *
 * Y CITAR EL NOMBRE NO ES USAR EL LOGO. Son dos permisos separados y hay que
 * pedirlos por separado. Este componente hace las dos cosas a la vez, para
 * trece empresas.
 *
 * KAVAK, ADEMAS, ESTA RESTRINGIDO: tiene una restriccion contractual cuyo
 * alcance nadie ha leido todavia. Hasta que alguien la lea, no se publica.
 *
 * QUE HACE FALTA PARA MONTARLO. Autorizacion escrita de CADA empresa que
 * quede en la lista, cubriendo el nombre Y el logo por separado. Lo que no
 * tenga las dos autorizaciones, sale de la lista antes de montar nada.
 *
 * A la fecha de este comentario, la unica autorizacion escrita que existe es la
 * de EuroCapital, y cubre SOLO citar el testimonio con nombre, cargo y empresa,
 * NO su logo. Esa autorizacion ya esta publicada en
 * src/components/TestimonialEuroCapital.jsx y no habilita nada de este archivo.
 *
 * REVISAR TAMBIEN EL TEXTO, no solo los permisos. La bajada dice "Más de 20
 * empresas utilizan nuestra plataforma" y la lista tiene trece nombres, cuando
 * los clientes con contrato son ocho (Mario, 2026-09-01). Sea cual sea la cifra
 * correcta, hay que verificarla antes de publicarla: no basta con conseguir las
 * autorizaciones.
 *
 * No se borra: se deja anotado. Este proyecto no borra nada.
 */
export default function Clients() {

  const clients = [
    { name: "GM Financial", logo: "/logos/gm-financial.png" },
    { name: "Surcos", logo: "/logos/surcos.png" },
    { name: "Migrante", logo: "/logos/migrante.png" },
    { name: "Autofin", logo: "/logos/autofin.png" },
    { name: "Sinacofi", logo: "/logos/sinacofi.png" },
    { name: "Orsan", logo: "/logos/orsan.png" },
    { name: "TransUnion", logo: "/logos/transunion.png" },
    { name: "Fincred", logo: "/logos/fincred.png" },
    { name: "EuroCapital", logo: "/logos/eurocapital.png" },
    { name: "Bantattersall", logo: "/logos/bantattersall.png" },
    { name: "Kavak", logo: "/logos/kavak.png" },
    { name: "Uthex", logo: "/logos/uthex.png" },
    { name: "Tecdex", logo: "/logos/tecdex.png" }
  ];

  return (
    <section id="clientes" className="pt-20 pb-32 bg-gray-50 text-center overflow-hidden">

      <div className="max-w-2xl mx-auto text-center mb-12">

  <h2 className="text-3xl font-bold mb-4">
    Empresas que confían en Credex
  </h2>

  <p className="text-gray-500">
    Más de 20 empresas utilizan nuestra plataforma
  </p>

</div>

      <div className="relative w-full overflow-hidden">

        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>

        {/* Fade derecha */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        <div className="flex gap-16 animate-scroll-slow w-max">

          {[...clients, ...clients].map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[120px] group"
            >

              {/* LOGO */}
              <img
                src={c.logo}
                alt={c.name}
                className="h-32 w-[300px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition"
              />

              {/* NOMBRE */}
              <span className="mt-2 text-sm text-gray-500 text-center w-full group-hover:text-gray-800 transition">
  {c.name}
</span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}