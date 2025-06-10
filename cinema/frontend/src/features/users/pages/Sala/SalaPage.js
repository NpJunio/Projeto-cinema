import SalaForm from "./SalaForm";
import Layout from "../../../../components/Layout/Layout";

export default function SalaPage() {
  return (
    <Layout>
      <div className="container mt-4">
        <h1>Cadastro de Sala</h1>
        <SalaForm />
        <hr />
      </div>
    </Layout>
  );
}
