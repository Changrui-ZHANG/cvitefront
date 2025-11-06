import "./App.css";
import Home from "@/components/pages/homePage/home";
import IndexPage from "@/components/pages/indexPage/indexPage";

import { ThemeProvider } from "@/components/themeMode/theme-provider";
import { Layout } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<IndexPage />}></Route>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<div>About Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
