import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import Usuarios from "./Pages/Usuarios"
import NotFound from "./Pages/NotFound"
import Cadastro from "./Pages/Cadastro"
import Nav from "./Components/Nav"

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
