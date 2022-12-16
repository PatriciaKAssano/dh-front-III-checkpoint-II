import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import AuthProvider from "./Providers/AuthContext";

const AppRoutes = () => {

    //<Route path="*" element={<ErrorComponent />} />

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dentist/:id" element={<Detail />} />     
                </Routes>
            </AuthProvider>
        </BrowserRouter>
        
    );
};

export default AppRoutes;