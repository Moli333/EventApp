import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";

export const EventApp = () => {

    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage/>} />
            
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
        </>
    );
};
