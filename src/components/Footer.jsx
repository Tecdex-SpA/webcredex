export default function Footer() {
  return (
    <footer className="bg-[#1C2543] text-white py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-8">

        {/* LOGOS */}
        <div className="flex items-center justify-center md:justify-start gap-5">
          <div className="w-[150px] flex justify-center">
            <img
              src="/logo-credex-footer.png"
              alt="Credex"
              className="h-16 object-contain"
            />
          </div>

          <div className="w-[70px] h-[70px] flex items-center justify-center">
            <img
              src="/iso9001.png"
              alt="ISO 9001"
              className="max-h-full max-w-full object-contain opacity-95"
            />
          </div>

          <div className="w-[70px] h-[70px] flex items-center justify-center">
            <img
              src="/corfo.png"
              alt="CORFO"
              className="max-h-full max-w-full object-contain opacity-95"
            />
          </div>
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col gap-2 text-sm text-center leading-relaxed">
          <div>📍 Guardia Vieja 202, oficina 403 - Providencia, Santiago - Chile</div>
          <div>☎ (56 2) 2 2869 4309</div>
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
        <div className="flex flex-col gap-2 text-sm text-center md:text-right">
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
