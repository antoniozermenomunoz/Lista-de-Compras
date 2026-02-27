import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const ListaPendientes = () => {
    navigate("/Lista-de-Compra");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm rounded-3" style={{ width: "18rem" }}>
        <div className="card-body d-flex align-items-center">
          {/* Logo */}
          <figure className="me-3 mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7835/7835565.png"
              alt="logo"
              className="img-fluid rounded-circle"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
          </figure>

          {/* Texto y botón */}
          <div className="d-flex flex-column">
            <h5 className="card-title mb-2">Home</h5>
            <button
              onClick={ListaPendientes}
              className="btn btn-primary btn-sm"
            >
              Lista de Compras
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
