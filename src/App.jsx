import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/01-HomePage";
import FormPage from "./pages/02-FormPage";
import ListCitiesPage from "./pages/03-ListCitiesPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/createcity" element={<FormPage />} />
      <Route path="/getcities" element={<ListCitiesPage />} />
    </Routes>
  );
}

export default App;
