import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// ===================== PATIENT =====================

export const registerPatient = (patient) =>
    axios.post(`${BASE_URL}/patient/register`, patient);

export const loginPatient = (patient) =>
    axios.post(`${BASE_URL}/patient/login`, patient);

// ===================== DOCTOR =====================

export const registerDoctor = (doctor) =>
    axios.post(`${BASE_URL}/doctor/register`, doctor);

export const loginDoctor = (doctor) =>
    axios.post(`${BASE_URL}/doctor/login`, doctor);

// ===================== LABORATORY =====================

export const registerLab = (lab) =>
    axios.post(`${BASE_URL}/lab/register`, lab);

export const loginLab = (lab) =>
    axios.post(`${BASE_URL}/lab/login`, lab);

// ===================== ADMIN =====================

export const registerAdmin = (admin) =>
    axios.post(`${BASE_URL}/admin/register`, admin);

export const loginAdmin = (admin) =>
    axios.post(`${BASE_URL}/admin/login`, admin);
export const getProfile = (email) => {
    return axios.get(
        `http://localhost:8080/api/patient/profile?email=${email}`
    );
};

export const completeProfile = (email, profile) => {
    return axios.put(
        `http://localhost:8080/api/patient/profile?email=${email}`,
        profile
    );
};