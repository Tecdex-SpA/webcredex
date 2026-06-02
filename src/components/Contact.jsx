export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-dark text-white text-center">

      <h2 className="text-3xl font-bold mb-6">
        Agenda una demo en vivo
      </h2>

      <p className="opacity-80 mb-8">
        Acceda al formulario y vea cómo evaluamos un cliente en segundos.
      </p>

      {/* 🔥 CTA PREVIO AL FORM */}
      <div className="text-center mb-10">
        <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Agendar demo personalizada
        </button>

        <p className="text-sm opacity-70 mt-3">
          Coordinamos una demostración adaptada a su negocio.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl h-[600px]">
          <iframe
            src="https://apps.clientify.net/forms/simpleembed/#/forms/embedform/279377/107027"
            className="w-full h-full border-0"
          />
        </div>
      </div>

    </section>
  );
}