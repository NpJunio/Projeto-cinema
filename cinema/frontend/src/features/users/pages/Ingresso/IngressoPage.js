import IngressoForm from "./IngressoForm";
import Layout from "../../../../components/Layout/Layout";

export default function IngressoPage() {
  return (
    <Layout>
      <div className="container mt-4">
        <h1>Compra de ingresso</h1>
        <IngressoForm />
        <hr />
      </div>
    </Layout>
  );
}
