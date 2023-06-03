import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Forgot from "./pages/login/Forgot";
import Product from "./components/Product/Product";
import { Suspense } from "react";
const loading = (
  <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
  </div>
);
const Auth = () => {

    return (
        <Router>
            <Routes>
                <Suspense fallback={loading}>
                    <Route path="/" element={<Login />} />
                    <Route path="/forgot-password" element={<Forgot />} />
                    <Route path="/home" element={<Product />} />
                </Suspense>
            </Routes>
        </Router>
    );
};

export default Auth;
