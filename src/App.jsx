import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingsPage from "./pages/ListingsPage";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
