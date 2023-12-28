import { Layout } from "./components/layout/component";
import { AboutUsPage } from "./pages/AboutUsPage/component";
import { MainPage } from "./pages/MainPage/component";
import { PricesPage } from "./pages/PricesPage/components";
import "./styles.module.css";

function App() {
  return (
    <Layout>
      {/* <MainPage /> */}
      {/* <AboutUsPage /> */}
      <PricesPage />
    </Layout>
  );
}

export default App;
