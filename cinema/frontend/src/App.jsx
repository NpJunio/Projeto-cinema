import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import Layout from "./layouts/Layout";

export default function App() {
  return (
    <React.Fragment>
      <Layout>
        <AppRoutes />
      </Layout>
    </React.Fragment>
  );
}
