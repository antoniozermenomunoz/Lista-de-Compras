function ProductoNuevoForm({
  AgregarProducto,
  SetAbrirNuevo,
  EditarProducto,
  SetAbrirEditar,
  AbrirEditar,
  NuevoProducto,
  SetNuevoProducto,
}) {
  const Guardar = (event) => {
    event.preventDefault();
    AgregarProducto(NuevoProducto);
    SetAbrirNuevo(false);
  };

  const Editar = (event) => {
    event.preventDefault();
    EditarProducto(NuevoProducto);
    SetNuevoProducto([]);
    SetAbrirNuevo(!SetAbrirNuevo);
    SetAbrirEditar(false);
  };

  const Cancelar = (event) => {
    event.preventDefault();
    SetNuevoProducto([]);
    SetAbrirNuevo(false);
  };

  const Cambios = (event) => {
    const { name, value } = event.target;
    SetNuevoProducto((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={AbrirEditar ? Editar : Guardar} className="container mt-5">
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Nuevo Producto</h4>
          <button
            type="button"
            onClick={Cancelar}
            className="btn btn-sm btn-outline-danger"
          >
            X
          </button>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">ID</label>
            <input
              name="id"
              value={NuevoProducto.id}
              onChange={Cambios}
              className="form-control"
              placeholder="Ingrese el ID"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Producto</label>
            <input
              name="producto"
              value={NuevoProducto.producto}
              onChange={Cambios}
              className="form-control"
              placeholder="Ingrese el nombre del producto"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Cantidad</label>
            <input
              name="cantidad"
              value={NuevoProducto.cantidad}
              onChange={Cambios}
              className="form-control"
              placeholder="Ingrese la cantidad"
            />
          </div>
        </div>

        <div className="card-footer d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <button
            type="button"
            onClick={Cancelar}
            className="btn btn-secondary"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}

export { ProductoNuevoForm };
