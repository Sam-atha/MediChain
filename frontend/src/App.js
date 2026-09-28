import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import PatientLogin from "./pages/PatientLogin";
import DoctorLogin from "./pages/DoctorLogin";
import LaboratoryLogin from "./pages/LaboratoryLogin";
import AdminLogin from "./pages/AdminLogin";

import PatientRegister from "./pages/PatientRegister";
import DoctorRegister from "./pages/DoctorRegister";
import LaboratoryRegister from "./pages/LaboratoryRegister";
import AdminRegister from "./pages/AdminRegister";

import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import LaboratoryDashboard from "./pages/LaboratoryDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import PatientProfile from "./pages/PatientProfile";
import PatientEditProfile from "./pages/PatientEditProfile";
import PatientMedicalHistory from "./pages/PatientMedicalHistory";
import PatientAccessManagement from "./pages/PatientAccessManagement";
import PatientAccessLogs from "./pages/PatientAccessLogs";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Home */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Login */}
                <Route path="/login/patient" element={<PatientLogin />} />
                <Route path="/login/doctor" element={<DoctorLogin />} />
                <Route path="/login/laboratory" element={<LaboratoryLogin />} />
                <Route path="/login/admin" element={<AdminLogin />} />

                {/* Register */}
                <Route path="/register/patient" element={<PatientRegister />} />
                <Route path="/register/doctor" element={<DoctorRegister />} />
                <Route path="/register/laboratory" element={<LaboratoryRegister />} />
                <Route path="/register/admin" element={<AdminRegister />} />

                {/* Dashboards */}
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                <Route path="/laboratory/dashboard" element={<LaboratoryDashboard />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />

                {/* Patient Pages */}
                <Route path="/patient/profile" element={<PatientProfile />} />
                <Route path="/patient/edit-profile" element={<PatientEditProfile />} />
                <Route path="/patient/medical-history" element={<PatientMedicalHistory />} />
                <Route path="/patient/access" element={<PatientAccessManagement />} />
                <Route path="/patient/logs" element={<PatientAccessLogs />} />

                {/* Redirect Invalid URLs */}
                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;