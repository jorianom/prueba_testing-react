import React from "react";

const Message = ({ n_cuotas, valor_cuota, msg }) => {
  var arr = [];
  for (var i = 1; i <= n_cuotas; i++) {
    arr.push(i);
  }
  return (
    <>
      {msg ? (
        <div class="alert alert-danger" role="alert">
          {msg}
        </div>
      ) : null}
      {valor_cuota ? (
        <div>
          <div>
            <div className="alert alert-primary" role="alert">
              <h1 className="title">
                Valor total credito a pagar: {valor_cuota * n_cuotas}
              </h1>
              <h2 className="subtitle">
                Valor fijo de cuota: {valor_cuota} a {n_cuotas} Meses
              </h2>
            </div>
          </div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((n) => (
                <tr key={n}>
                  <th scope="row">{n}</th>
                  <td>${valor_cuota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default Message;
