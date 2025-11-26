import "./App.css";
import Home from "@/components/pages/homePage/Home";
import BetaPage from "@/components/pages/betaPage/BetaPage";
import Cv from "@/components/pages/cv/Cv";

import { ThemeProvider } from "@/components/themeMode/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayer from "@/components/pages/NavLayer";
 
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayer />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="cv" element={<Cv />} />
            <Route path="beta" element={<BetaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
