import { Provider } from "react-redux";
import { Layout } from "./components/layout/component";
import { AboutUsPage } from "./pages/AboutUsPage/component";
import { ContactsPage } from "./pages/ContactsPage/component";
import { MainPage } from "./pages/MainPage/component";
import { NotFoundPage } from "./pages/NotFoundPage/component";
import { PricesPage } from "./pages/PricesPage/components";
import { ServicesPage } from "./pages/ServicesPage/component";
import "./styles.module.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="o_nas" element={<AboutUsPage />} />
            <Route path="uslugi" element={<ServicesPage />} />
            <Route path="ceny" element={<PricesPage />} />
            <Route path="contacty" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
