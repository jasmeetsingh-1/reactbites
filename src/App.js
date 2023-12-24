import Header from "./components/header/header";
import LoginPage from "./components/login/loginPage";
import HomePage from "./components/homepage/homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" exact element={<LoginPage />} />
    </Routes>
  );
}

export default App;
