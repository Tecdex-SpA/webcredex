export default function Footer() {
  return (
    <footer className="bg-[#1C2543] text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

        {/* LOGOS */}
        <div className="flex flex-col items-center md:items-start gap-5">

          <img
            src="/logo-credex-footer.png"
            alt="Credex"
            className="h-20 md:h-24 object-contain"
          />

          <div className="flex items-center gap-8">

            <img
              src="/iso9001.png"
              alt="ISO 9001"
              className="h-14 md:h-16 object-contain opacity-95"
            />

            <img
              src="/corfo.png"
              alt="CORFO"
              className="h-14 md:h-16 object-contain opacity-95"
            />

          </div>

        </div>

        {/* CONTACTO */}
        <div className="flex flex-col gap-3 text-sm text-center md:text-left">

          <div>
            📍 Guardia Vieja 202, oficina 403 - Providencia, Santiago - Chile
          </div>

          <div>
            ☎ (56 2) 2 2869 4309
          </div>

          <div>
            ✉{" "}
            <a
              href="mailto:contacto@credex.cl"
              className="underline hover:opacity-80"
            >
              contacto@credex.cl
            </a>
          </div>

        </div>

        {/* RECURSOS */}
        <div className="flex flex-col gap-2 text-sm text-center md:text-left">

          <span className="text-white/60 text-xs uppercase tracking-wide">
            Recursos
          </span>

          <a
            href="/blog"
            className="text-orange-400 hover:text-orange-300 transition"
          >
            Blog Credex
          </a>

        </div>

      </div>
    </footer>
  );
}
