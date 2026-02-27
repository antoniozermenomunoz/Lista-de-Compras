import React from "react";

function UseLocalStorage(Tabla, ValorInicial) {
  const [Productos, SetProductos] = React.useState(ValorInicial);
  const [Cargando, SetCargando] = React.useState(true);
  const [Error, SetError] = React.useState(false);

  React.useEffect(() => {
    try {
      const LocalStorageProducto = localStorage.getItem(Tabla);
      let ParseProductos;
      if (!LocalStorageProducto) {
        localStorage.setItem(Tabla, JSON.stringify(ValorInicial));
        ParseProductos = ValorInicial;
      } else {
        ParseProductos = JSON.parse(LocalStorageProducto);
      }

      SetProductos(ParseProductos);
      SetCargando(false);
    } catch (Error) {
      SetError(Error);
    }
  }, []);

  const GuardarProducto = (NuevoProducto) => {
    try {
      const stringifiedItem = JSON.stringify(NuevoProducto);
      localStorage.setItem(Tabla, stringifiedItem);
      SetProductos(NuevoProducto);
    } catch (Error) {
      SetError(Error);
    }
  };

  return { Productos, Error, Cargando, GuardarProducto };
}
export { UseLocalStorage };
