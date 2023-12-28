import { Layout } from "./components/layout/component";
import { AboutUsPage } from "./pages/AboutUsPage/component";
import { MainPage } from "./pages/MainPage/component";
import "./styles.module.css";

function App() {
  return (
    <Layout>
      {/* <MainPage /> */}
      <AboutUsPage />
    </Layout>
  );
}

export default App;
