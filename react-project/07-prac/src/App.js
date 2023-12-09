import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PhotoDetailPage from "./pages/PhotoDetailPage";
import Photos from "./pages/Photos";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      {/* Routes, Route 감싸야함 */}
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/products"
            element={<ProductsPage></ProductsPage>}
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductDetailPage></ProductDetailPage>}
          ></Route>
          <Route path="/photos" element={<Photos></Photos>}></Route>
          <Route
            path="/photos/:id"
            element={<PhotoDetailPage></PhotoDetailPage>}
          ></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
