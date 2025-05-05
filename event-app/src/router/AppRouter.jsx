import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../events/pages/HomePage";
import { LoginPage } from "../events/pages/LoginPage";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};