import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ClientsPage from "./pages/ClientsPage";
import PressReleasePage from "./pages/PressReleasePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CNESSTPermitPage from "./pages/CNESSTPermitPage";
import WhyChooseGeoEspacePage from "./pages/WhyChooseGeoEspacePage";
import Top5Page from "./pages/Top5Page";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/press-releases" element={<PressReleasePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cnesst-permit" element={<CNESSTPermitPage />} />
          <Route
            path="/why-choose-geoeospace"
            element={<WhyChooseGeoEspacePage />}
          />
          <Route path="/top-5" element={<Top5Page />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
