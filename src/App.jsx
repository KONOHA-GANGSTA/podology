import { Layout } from "./components/layout/component";
import { AboutUsPage } from "./pages/AboutUsPage/component";
import { ContactsPage } from "./pages/ContactsPage/component";
import { MainPage } from "./pages/MainPage/component";
import { PricesPage } from "./pages/PricesPage/components";
import "./styles.module.css";

function App() {
  return (
    <Layout>
      {/* <MainPage /> */}
      {/* <AboutUsPage /> */}
      {/* <PricesPage /> */}
      <ContactsPage />
    </Layout>
  );
}

export default App;
