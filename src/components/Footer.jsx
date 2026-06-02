export default function Footer() {
  return (
    <footer className="bg-[#1C2543] text-white py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        {/* LOGOS */}
        <div className="flex items-center gap-8 flex-col md:flex-row">
          <img src="/logo-credex-footer.png" className="h-12" />

          <div className="flex items-center gap-6">
            <img src="/corfo.png" className="h-10 opacity-90" />
            <img src="/iso9001.png" className="h-10 opacity-90" />
          </div>
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col gap-2 text-sm text-center md:text-left">
          <div>📍 Guardia Vieja 202, oficina 403 - Providencia, Santiago - Chile</div>
          <div>☎ (56 2) 2 2869 4309</div>
          <div>
            ✉{" "}
            <a href="mailto:contacto@credex.cl" className="underline hover:opacity-80">
              contacto@credex.cl
            </a>
          </div>
        </div>

        {/* SEO / BLOG LINKS */}
        <div className="flex flex-col gap-2 text-sm text-center md:text-left">
          <span className="text-white/60 text-xs uppercase tracking-wide">
            Recursos
          </span>

          <a href="/blog" className="text-orange-400">
          Blog Credex
          </a>
        </div>

      </div>
    </footer>
  );
}