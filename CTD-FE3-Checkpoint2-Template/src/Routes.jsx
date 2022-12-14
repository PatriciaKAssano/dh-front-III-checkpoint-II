import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import { useState } from "react";

const AppRoutes = () => {

    //<Route path="*" element={<ErrorComponent />} />

    return (


        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dentist/:id" element={<Detail />} />     
            </Routes>
        </BrowserRouter>
        
    );
};

export default AppRoutes;