import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100 p-4 rounded-3 shadow-lg">
        {children}
      </div>
    </div>,
    document.getElementById("modal"),
  );
}

export { Modal };
