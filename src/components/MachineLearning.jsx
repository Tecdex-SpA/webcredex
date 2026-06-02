import { Brain, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function MachineLearning() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Evaluación crediticia con Machine Learning
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Incorpore modelos predictivos que permiten identificar mejores clientes, reducir riesgo y aumentar la aprobación automática.
          </p>

        </div>

        {/* BLOQUE PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* TEXTO */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Credex integra modelos de Machine Learning entrenados con datos históricos para predecir el comportamiento de pago de sus clientes.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Esta tecnología permite analizar miles de variables y detectar patrones que no son visibles en modelos tradicionales ni en evaluaciones manuales.
            </p>

            <p className="text-gray-600 leading-relaxed">
              El resultado es una evaluación más precisa, rápida y escalable, que mejora la toma de decisiones sin reemplazar su modelo actual.
            </p>

          </div>

          {/* IMAGEN / VISUAL */}
          <div className="relative">

            <div className="absolute inset-0 bg-orange-100/40 blur-2xl rounded-3xl"></div>

            <div className="relative bg-white border rounded-2xl shadow-lg p-6">

              <img
                src="/ml-dashboard.png"
                alt="Modelo de machine learning aplicado a evaluación crediticia"
                className="rounded-xl"
                loading="lazy"
              />

            </div>

          </div>

        </div>

        {/* BENEFICIOS */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
            <Brain className="w-6 h-6 text-orange-500 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900">
              Modelo predictivo
            </h3>
            <p className="text-sm text-gray-500">
              Predice el comportamiento de pago utilizando datos históricos reales.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
            <TrendingUp className="w-6 h-6 text-orange-500 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900">
              Más aprobación automática
            </h3>
            <p className="text-sm text-gray-500">
              Convierte evaluaciones manuales en decisiones automáticas.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
            <ShieldCheck className="w-6 h-6 text-orange-500 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900">
              Control de riesgo
            </h3>
            <p className="text-sm text-gray-500">
              Mejora la precisión manteniendo políticas de crédito seguras.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
            <Zap className="w-6 h-6 text-orange-500 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900">
              Decisiones en tiempo real
            </h3>
            <p className="text-sm text-gray-500">
              Evalúa clientes en segundos sin intervención manual.
            </p>
          </div>

        </div>

        {/* BLOQUE DIFERENCIADOR */}
        <div className="mt-20 text-center max-w-3xl mx-auto">

          <p className="text-lg text-gray-700 mb-4">
            No reemplaza su modelo actual.
          </p>

          <p className="text-2xl font-semibold text-gray-900 mb-6">
            Lo potencia con una segunda capa de decisión inteligente.
          </p>

          <p className="text-gray-500">
            El modelo actúa sobre los casos que normalmente requieren análisis manual, entregando una recomendación automatizada basada en datos reales.
          </p>

        </div>

        {/* RESULTADO */}
        <div className="mt-16 text-center">

          <p className="text-sm text-gray-500 mb-2">
            Resultados observados en implementación real
          </p>

          <p className="text-3xl font-semibold text-gray-900">
            +30% en aprobación automática relativa
          </p>

        </div>

      </div>

    </section>
  );
}