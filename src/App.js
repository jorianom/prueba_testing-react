import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

function App() {
  const [credit, setCredit] = useState({
    valor_cuota: 0,
    n_cuotas: 0,
  });
  return (
    <div className="App">
      <Navbar />
      <Form setCredit={setCredit} />
      <Table
        valor_cuota={credit.valor_cuota}
        n_cuotas={credit.n_cuotas}
        msg={credit.msg}
      />
    </div>
  );
}

export default App;
