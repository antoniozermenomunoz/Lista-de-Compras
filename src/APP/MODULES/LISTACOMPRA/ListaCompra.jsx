import { ProductoNuevoForm } from "./COMPONENTS/ProductoNuevoForm";
import { UseListaCompra } from "./HOOKS/UseListaCompra";
import { Producto } from "./COMPONENTS/Producto";
import { Modal } from "../../COMPONENTS/Modal";
import { useNavigate } from "react-router-dom";
import { Lista } from "./COMPONENTS/Lista";
import { useState } from "react";

function ListaCompra() {
  const navigate = useNavigate();

  const [NuevoProducto, SetNuevoProducto] = useState([]);
  const [AbrirEditar, SetAbrirEditar] = useState(false);

  const {
    AbrirNuevo,
    SetAbrirNuevo,
    Buscar,
    SetBuscar,
    ProductosFiltro,
    Error,
    Cargando,
    AgregarProducto,
    CompletoProducto,
    EditarProducto,
    BorrarProductos,
  } = UseListaCompra();

  const Atras = () => {
    navigate("/");
  };
  const Nuevo = () => {
    SetAbrirNuevo(!AbrirNuevo);
  };
  const Editar = (e) => {
    SetNuevoProducto(e);
    SetAbrirNuevo(!AbrirNuevo);
    SetAbrirEditar(!AbrirEditar);
  };

  return (
    <div className="container py-4">
      {/* Barra superior */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button onClick={Atras} className="btn btn-outline-secondary">
          ← Atrás
        </button>

        <div className="input-group w-50">
          <span className="input-group-text">Buscar</span>
          <input
            type="text"
            className="form-control"
            placeholder="Escribe para buscar..."
            value={Buscar}
            onChange={(evento) => {
              SetBuscar(evento.target.value);
            }}
          />
        </div>

        <button onClick={Nuevo} className="btn btn-primary">
          + Nuevo
        </button>
      </div>

      {/* Lista */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <Lista
            ProductosFiltro={ProductosFiltro}
            Error={Error}
            Cargando={Cargando}
          >
            {(producto) => (
              <Producto
                key={producto.id}
                id={producto.id}
                producto={producto.producto}
                cantidad={producto.cantidad}
                estatus={producto.estatus}
                CompletoProducto={() => CompletoProducto(producto.id)}
                BorrarProductos={() => BorrarProductos(producto.id)}
                Editar={() => Editar(producto)}
              />
            )}
          </Lista>
        </div>
      </div>

      {/* Modal */}
      {AbrirNuevo && (
        <Modal>
          <ProductoNuevoForm
            AgregarProducto={AgregarProducto}
            SetAbrirNuevo={SetAbrirNuevo}
            EditarProducto={EditarProducto}
            SetAbrirEditar={SetAbrirEditar}
            AbrirEditar={AbrirEditar}
            NuevoProducto={NuevoProducto}
            SetNuevoProducto={SetNuevoProducto}
          />
        </Modal>
      )}
    </div>
  );
}

export { ListaCompra };
