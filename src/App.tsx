import "./App.css";
import Home from "./components/homePage/home";
import { ThemeProvider } from "@/components/shadcn/themeMode/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
