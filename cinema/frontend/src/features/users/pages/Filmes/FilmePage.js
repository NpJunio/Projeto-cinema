import FilmeForm from "./FilmeForm";
import Layout from "../../../../components/Layout/Layout";

export default function FilmePage() {
  return (
    <Layout>
      <div className="container mt-4">
        <h1>Compra de ingresso</h1>
        <FilmeForm />
        <hr />
      </div>
    </Layout>
  );
}
