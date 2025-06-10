import { useEffect, useState } from "react";
import './FilmeList.css';
import axios from "axios";

export default function FilmeList() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/filmes")  // ajusta a URL conforme sua API
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao carregar filmes");
        }
        return res.json();
      })
      .then((data) => {
        setFilmes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando filmes...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="container-filmes">
      <h2>Lista de Filmes</h2>
      <div className="row">
        {filmes.map((filme, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img
                src={filme.imagem}
                className="card-img-top"
                alt={`Imagem do filme ${filme.titulo}`}
              />
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
