import RouteSeo from "../components/RouteSeo";

export default function MachineLearningCredito() {
  return (
    <>
      <RouteSeo route="/blog/machine-learning" />

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Machine Learning en evaluación crediticia
        </h1>

        <p className="text-gray-600 mb-4">
          El machine learning es un conjunto de técnicas estadísticas que, a partir de datos
          históricos, estiman la probabilidad de que un cliente cumpla con sus pagos. En
          evaluación crediticia se usa como complemento de las reglas de negocio, no como
          reemplazo: la regla define la política, el modelo aporta una estimación.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Qué condiciones necesita
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Volumen histórico suficiente de operaciones con resultado conocido</li>
          <li>Datos consistentes y validados: un modelo hereda los errores de sus datos</li>
          <li>Recalibración periódica, porque el comportamiento de pago cambia con el ciclo</li>
          <li>Trazabilidad de la decisión, exigible en cualquier revisión posterior</li>
        </ul>

        <p className="text-gray-600 mb-6">
          Sin esas condiciones, un modelo predictivo agrega complejidad sin agregar criterio.
          Por eso conviene evaluar primero si el proceso ya tiene la información que el
          modelo necesitaría.
        </p>

        <p className="text-gray-600">
          Ver{" "}
          <a href="/scoring-crediticio" className="text-primary-500">scoring crediticio</a>.
        </p>

      </div>
    </>
  );
}