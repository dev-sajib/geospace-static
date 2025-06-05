import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ClientsPage from "./pages/ClientsPage";
import PressReleasePage from "./pages/PressReleasePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/press-releases" element={<PressReleasePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
