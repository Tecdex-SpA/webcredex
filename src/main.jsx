import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME Y MERCADOS
import App from "./App";
// "/" aplica el mercado guardado en el selector llevando a su ruta (C6).
import HomeMarketRoute from "./components/HomeMarketRoute";

// LANDINGS
import EvaluacionCrediticia from "./pages/EvaluacionCrediticia";
import ScoringCrediticio from "./pages/ScoringCrediticio";
import AnalisisRiesgo from "./pages/AnalisisRiesgo";

// BLOG
import Blog from "./blog/Blog";
import EvaluacionCrediticiaBlog from "./blog/EvaluacionCrediticia";
import ScoringCrediticioBlog from "./blog/ScoringCrediticio";
import AnalisisRiesgoBlog from "./blog/AnalisisRiesgo";
import ReducirIncobrables from "./blog/ReducirIncobrables";
import MachineLearningCredito from "./blog/MachineLearningCredito";

// SEO LANDINGS
import Evaluacion from "./pages/EvaluacionCrediticiaEmpresas";
import Scoring from "./pages/ScoringCrediticioChile";
import Riesgo from "./pages/AnalisisRiesgoEmpresas";

// CONVERSION
import Gracias from "./pages/Gracias";

// 404
import NotFound from "./pages/NotFound";

// Aviso geografico no bloqueante (D14). Global: aplica a todas las rutas.
import GeoNotice from "./components/GeoNotice";

// Deduplica el <head>: saca lo prerenderizado cuando React ya monto lo suyo.
import PrerenderedHeadCleanup from "./components/PrerenderedHeadCleanup";

// CORFO
import CorfoEscalamiento2019 from "./pages/CorfoEscalamiento2019";
import CorfoConsolidaExpande2024 from "./pages/CorfoConsolidaExpande2024";

// Captura content_id de la URL DE ENTRADA. Va antes de renderizar: despues, una
// navegacion interna ya pudo cambiar location.search y la atribucion se perderia.
import { initAnalytics } from "./lib/analytics";

initAnalytics();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <PrerenderedHeadCleanup />
        <GeoNotice />

        <Routes>
          <Route path="/" element={<HomeMarketRoute />} />
          <Route path="/cl" element={<App />} />
          <Route path="/pe" element={<App />} />
          <Route path="/co" element={<App />} />
          <Route path="/ar" element={<App />} />

          <Route path="/evaluacion-crediticia" element={<EvaluacionCrediticia />} />
          <Route path="/scoring-crediticio" element={<ScoringCrediticio />} />
          <Route path="/analisis-riesgo" element={<AnalisisRiesgo />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/evaluacion-crediticia" element={<EvaluacionCrediticiaBlog />} />
          <Route path="/blog/scoring-crediticio" element={<ScoringCrediticioBlog />} />
          <Route path="/blog/analisis-riesgo" element={<AnalisisRiesgoBlog />} />
          <Route path="/blog/reducir-incobrables" element={<ReducirIncobrables />} />
          <Route path="/blog/machine-learning" element={<MachineLearningCredito />} />

          <Route path="/evaluacion-crediticia-empresas" element={<Evaluacion />} />
          <Route path="/scoring-crediticio-chile" element={<Scoring />} />
          <Route path="/analisis-riesgo-empresas" element={<Riesgo />} />

          <Route
            path="/corfo-escalamiento-2019"
            element={<CorfoEscalamiento2019 />}
          />

          <Route
            path="/corfo-consolida-expande-2024"
            element={<CorfoConsolidaExpande2024 />}
          />

          {/* Destino de la redireccion posterior al envio del formulario de
              Clientify. Se configura en Clientify, no en el codigo. */}
          <Route path="/gracias" element={<Gracias />} />

          {/* Cualquier ruta desconocida en navegación cliente.
              El 404 con status HTTP real lo sirve public/404.html vía Vercel. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
