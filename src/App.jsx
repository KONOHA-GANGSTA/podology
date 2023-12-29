import { Layout } from "./components/layout/component";
import { AboutUsPage } from "./pages/AboutUsPage/component";
import { ContactsPage } from "./pages/ContactsPage/component";
import { MainPage } from "./pages/MainPage/component";
import { NotFoundPage } from "./pages/NotFoundPage/component";
import { PricesPage } from "./pages/PricesPage/components";
import { ServicesPage } from "./pages/ServicesPage/component";
import "./styles.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="podology/" element={<MainPage />} />
          <Route path="podology/o_nas" element={<AboutUsPage />} />
          <Route path="podology/uslugi" element={<ServicesPage />} />
          <Route path="podology/ceny" element={<PricesPage />} />
          <Route path="podology/contacty" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
