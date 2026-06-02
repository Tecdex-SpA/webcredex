export default function Stats() {
  const stats = [
    { value: "+30%", label: "Aumento aprobación" },
    { value: "-25%", label: "Reducción riesgo" },
    { value: "+100M", label: "Evaluaciones" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h2 className="text-3xl font-bold">{s.value}</h2>
            <p className="opacity-60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}