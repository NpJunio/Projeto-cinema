import SessaoForm from "./SessaoForm";
import Layout from "../../../../components/Layout/Layout";

export default function SessaoPage() {
  return (
    <Layout>
      <div className="container mt-4">
        <h1>Cadastro de Sessão</h1>
        <SessaoForm />
        <hr />
      </div>
    </Layout>
  );
}
