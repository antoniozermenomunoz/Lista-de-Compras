import { UseLocalStorage } from "../../../HOOKS/UseLocalStorage";
import React from "react";

function UseListaCompra() {
  const { Productos, Error, Cargando, GuardarProducto } = UseLocalStorage(
    "PRODUCTOS",
    [],
  );

  const [Buscar, SetBuscar] = React.useState("");
  const [AbrirNuevo, SetAbrirNuevo] = React.useState(false);

  const ProductosFiltro = !Buscar
    ? Productos
    : Productos.filter((producto) =>
        producto?.producto?.toLowerCase().includes(Buscar.toLowerCase()),
      );

  const AgregarProducto = (NuevoProducto) => {
    const Producto = [...Productos];
    Producto.push({
      id: crypto.randomUUID(),
      ...NuevoProducto,
      estatus: false,
    });
    GuardarProducto(Producto);
  };

  const EditarProducto = (NuevoProducto) => {
    const index = Productos.findIndex((p) => p.id === NuevoProducto.id);
    if (index === -1) return;
    const nuevosProductos = [...Productos];
    nuevosProductos[index].producto = NuevoProducto.producto;
    nuevosProductos[index].cantidad = NuevoProducto.cantidad;
    GuardarProducto(nuevosProductos);
  };

  const BorrarProductos = (id) => {
    const index = Productos.findIndex((rs) => rs.id === id);
    const nuevosProductos = [...Productos];
    nuevosProductos.splice(index, 1);
    GuardarProducto(nuevosProductos);
  };

  const CompletoProducto = (id) => {
    const index = Productos.findIndex((p) => p.id === id);
    if (index === -1) return;
    const nuevosProductos = [...Productos];
    nuevosProductos[index].estatus = !nuevosProductos[index].estatus;
    GuardarProducto(nuevosProductos);
  };

  return {
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
  };
}

export { UseListaCompra };
