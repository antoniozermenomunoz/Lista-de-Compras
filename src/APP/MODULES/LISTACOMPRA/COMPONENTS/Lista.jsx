function Lista({ ProductosFiltro, Error, Cargando, children }) {
  if (Cargando) return <p>Cargando...</p>;
  if (Error) return <p>Error al cargar los productos</p>;
  if (!ProductosFiltro || !ProductosFiltro.length)
    return <p>No hay productos</p>;

  return (
    <ul className="list-group">
      {ProductosFiltro.map((producto) => children(producto))}
    </ul>
  );
}

export { Lista };
