import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import Titulos from "paginas/Titulos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
      <Route path="/" element={<PaginaPadrao />}>
        <Route path="/" element={<Inicio />} />
      </Route>
      
      <Route path="sobremim" element={<SobreMim />} />
      <Route path="titulos" element={<Titulos />} />

      <Route path="posts/:id" element={<Post/>} />
      <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
