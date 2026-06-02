export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* fondo oscuro */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* contenido */}
      <div className="relative bg-white rounded-xl w-[90%] max-w-3xl h-[80vh] overflow-hidden shadow-2xl">

        {/* botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-black text-xl"
        >
          ✕
        </button>

        {children}
      </div>

    </div>
  );
}