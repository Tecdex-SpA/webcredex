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