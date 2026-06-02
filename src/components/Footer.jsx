export default function Footer() {
  return (
    <footer className="bg-[#111C3A] text-white py-10 border-t border-white/10 rounded-t-3xl shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_0.8fr] items-center gap-10">

        {/* LOGOS */}
        <div className="flex items-center justify-center md:justify-start gap-6 md:border-r md:border-white/15 md:pr-10">
          <img
            src="/logo-credex-footer.png"
            alt="Credex"
            className="h-20 object-contain"
          />

          <img
            src="/iso9001.png"
            alt="ISO 9001"
            className="h-20 object-contain"
          />

          <img
            src="/corfo.png"
            alt="CORFO"
            className="h-20 object-contain"
          />
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col gap-4 text-sm md:text-base text-center md:text-left md:border-r md:border-white/15 md:pr-10">
          <div>📍 Guardia Vieja 202, oficina 403</div>
          <div>Providencia, Santiago - Chile</div>
          <div>☎ (56 2) 2 2869 4309</div>
          <div>
            ✉{" "}
            <a href="mailto:contacto@credex.cl" className="underline hover:opacity-80">
              contacto@credex.cl
            </a>
          </div>
        </div>

        {/* RECURSOS */}
        <div className="flex flex-col gap-3 text-sm md:text-base text-center md:text-left">
          <span className="text-white/60 text-xs uppercase tracking-wide">
            Recursos
          </span>

          <a
            href="/blog"
            className="text-orange-400 hover:text-orange-300 transition font-semibold"
          >
            Blog Credex
          </a>
        </div>

      </div>
    </footer>
  );
}
