function Producto(propiedades) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        propiedades.estatus ? "list-group-item-success" : ""
      }`}
    >
      <div>
        <h6 className="mb-1 fw-bold">{propiedades.producto}</h6>
        <small className="d-block">Cantidad: {propiedades.cantidad}</small>
        <small>Estado: {propiedades.estatus ? "Terminado" : "Pendiente"}</small>
      </div>
      <div className="btn-group">
        <button
          onClick={propiedades.CompletoProducto}
          className="btn btn-success btn-sm"
        >
          ✔
        </button>
        <button onClick={propiedades.Editar} className="btn btn-warning btn-sm">
          ✏
        </button>
        <button
          onClick={propiedades.BorrarProductos}
          className="btn btn-danger btn-sm"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export { Producto };
