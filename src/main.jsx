import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME
import App from "./App";

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

// CORFO
import CorfoEscalamiento2019 from "./pages/CorfoEscalamiento2019";
import CorfoConsolidaExpande2024 from "./pages/CorfoConsolidaExpande2024";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<App />} />

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

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
