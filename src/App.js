import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Forgot from "./pages/login/Forgot";
import Product from "./components/Product/Product";

const Auth = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<Forgot />} />
                <Route path="/home" element={<Product />} />
            </Routes>
        </Router>
    );
};

export default Auth;
