export default function Integrations() {

  const integrations = [
    { name: "Carpeta Tributaria", logo: "/logos/carpeta.png" },
    { name: "Situación Tributaria", logo: "/logos/situacion.png" },
    { name: "Renta Tributaria", logo: "/logos/renta.png" },
    { name: "Boletín Concursal", logo: "/logos/boletin.png" },
    { name: "Sinacofi", logo: "/logos/sinacofi.png" },
    { name: "Equifax", logo: "/logos/equifax.png" },
    { name: "TransUnion", logo: "/logos/transunion.png" },
    { name: "Previred", logo: "/logos/previred.png" },
    { name: "Autentia", logo: "/logos/autentia.png" },
    { name: "Acepta", logo: "/logos/acepta.png" },
    { name: "Poder Judicial", logo: "/logos/pjudicial.png" },
    { name: "AFC", logo: "/logos/AFC.png" },
    { name: "CMF", logo: "/logos/CMF.png" },
    { name: "Deudores Pensiones", logo: "/logos/deudores.png" }
  ];

  return (
    <section id="integraciones" className="py-24 bg-white text-center overflow-hidden">

      <div className="max-w-3xl mx-auto mb-12 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Integraciones
        </h2>

        <p className="text-gray-500">
          Conectado con SII, CMF, burós de crédito y fuentes regulatorias para decisiones basadas en datos reales.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">

        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>

        {/* Fade derecha */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex gap-24 animate-scroll-slow w-max">

          {[...integrations, ...integrations].map((i, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[240px] group"
            >

              <img
                src={i.logo}
                alt={i.name}
                className="h-24 w-[240px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition"
              />

              <span className="mt-3 text-sm font-medium text-gray-600 text-center w-full group-hover:text-gray-900 transition">
                {i.name}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* 🔥 NUEVO BLOQUE IMPLEMENTACIÓN */}
      <div className="mt-20 max-w-3xl mx-auto px-6 text-center">

        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">

          <h3 className="text-2xl font-semibold mb-3 text-gray-900">
            Implementación en días, no meses
          </h3>

          <p className="text-gray-500">
            Integración rápida con tus sistemas y fuentes de información.
          </p>

        </div>

      </div>

    </section>
  );
}