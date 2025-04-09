import { useState } from "react";

function Formulario() {
  const [valorDelInputNombre, setValorDelInputNombre] = useState("");
  const [valorDelInputEmail, setValorDelInputEmail] = useState("");
  const [valorDelInputTelefono, setValorDelInputTelefono] = useState("");
  const [valorDelInputDireccion, setValorDelInputDireccion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `El usuario escribió: 
      Nombre: ${valorDelInputNombre}, 
      Email: ${valorDelInputEmail}, 
      Teléfono: ${valorDelInputTelefono},
      Dirección: ${valorDelInputDireccion}`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Para finalizar la compra, llena los datos</h2>
        <hr />
        <div className="container text-center">
          <div className="row">
            <div className="col">Nombre completo</div>
            <div className="col">Correo</div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={valorDelInputNombre}
                onChange={(e) => setValorDelInputNombre(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                value={valorDelInputEmail}
                onChange={(e) => setValorDelInputEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="container text-center mt-3">
          <div className="row">
            <div className="col">Teléfono</div>
            <div className="col">Dirección</div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                value={valorDelInputTelefono}
                onChange={(e) => setValorDelInputTelefono(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={valorDelInputDireccion}
                onChange={(e) => setValorDelInputDireccion(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-success" type="submit">
            Confirmar compra
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
}

export default Formulario;
