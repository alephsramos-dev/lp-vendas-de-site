import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import "./Styles/global.css";
import "./Styles/reset.css";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Inicializando SpeedInsights
  SpeedInsights({
    beforeSend: (payload) => {
      console.log("Payload enviado:", payload);
      return payload;
    },
  });

  useEffect(() => {
    const updateAOS = () => {
      const duration = window.innerWidth > 1000 ? 1500 : 1000;

      AOS.init({
        duration: duration,
        offset: 20,
        easing: "ease-in-out",
        once: true,
      });

      AOS.refresh();
    };

    window.addEventListener("resize", updateAOS);
    updateAOS();

    return () => {
      window.removeEventListener("resize", updateAOS);
    };
  }, []);

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
        <Analytics />
      </>
    </Router>
  );
}

export default App;
