// src/features/filmes/components/FilmeList.js
import { useEffect, useState, React } from "react";

export default function FilmeList() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("filmes")) || [];
    setFilmes(data);
  }, []);

  return (
    <div>
      <h2>Lista de Filmes</h2>
      <div className="row">
        {filmes.map((filme, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{filme.titulo}</h5>
                <p className="card-text">{filme.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
