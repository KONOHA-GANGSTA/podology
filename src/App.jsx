import { Layout } from "./components/layout/component";
import { AboutUsPage } from "./pages/AboutUsPage/component";
import { ContactsPage } from "./pages/ContactsPage/component";
import { MainPage } from "./pages/MainPage/component";
import { PricesPage } from "./pages/PricesPage/components";
import { ServicesPage } from "./pages/ServicesPage/component";
import "./styles.module.css";

function App() {
  return (
    <Layout>
      {/* <MainPage /> */}
      {/* <AboutUsPage /> */}
      <ServicesPage />
      {/* <PricesPage /> */}
      {/* <ContactsPage /> */}
    </Layout>
  );
}

export default App;
