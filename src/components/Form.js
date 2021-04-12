import React, { useState } from "react";

const Form = ({ setCredit }) => {
  const [data, setData] = useState({
    cuotas: 0,
    total: 0,
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    };
    const res = await fetch("http://localhost:4000/api/credit", requestOptions);
    const credit = await res.json();
    setCredit({
      valor_cuota: credit.pay,
      n_cuotas: data.cuotas,
      msg: credit.message,
    });
  };
  return (
    <>
      <form id="form" onSubmit={onSubmit} className="card card-body">
        <div className="form-group">
          <input
            type="number"
            id="total"
            name="total"
            className="form-control"
            placeholder="Valor "
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="cuotas"
            name="cuotas"
            className="form-control"
            placeholder="N. Cuotas"
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary">Guardar Curso</button>
      </form>
    </>
  );
};

export default Form;
