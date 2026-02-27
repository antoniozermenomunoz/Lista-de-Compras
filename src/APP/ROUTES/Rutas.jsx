import { HashRouter, Routes, Route } from "react-router-dom";
import { ListaCompraPage } from "../PAGES/ListaCompraPage";
import { AppLayout } from "../LAYOUTS/AppLayout";
import { HomePage } from "../PAGES/HomePage";

function Rutas() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Lista-de-Compra" element={<ListaCompraPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export { Rutas };
