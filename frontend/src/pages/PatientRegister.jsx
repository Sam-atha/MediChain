import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerPatient } from "../api/authService";
import "../styles/Login.css";

function PatientRegister() {

    const navigate = useNavigate();

    const [patient, setPatient] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
        bloodGroup: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        emergencyContact: "",
        aadhaarNumber: "",
        user: {
            username: "",
            password: "",
            role: "PATIENT"
        }
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "password") {

            setPatient({
                ...patient,
                user: {
                    ...patient.user,
                    password: value
                }
            });

        } else {

            setPatient({
                ...patient,
                [name]: value
            });

        }

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const patientData = {
                ...patient,
                user: {
                    username: patient.email,
                    password: patient.user.password,
                    role: "PATIENT"
                }
            };

            console.log(patientData);

            const response = await registerPatient(patientData);

            alert(response.data);

            navigate("/login/patient");

        } catch (error) {

            console.log(error);

            alert(error.response?.data || "Registration Failed");

        }

    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Patient Registration
                </h2>

                <form onSubmit={handleRegister}>

                    <input
                        className="form-control mb-3"
                        placeholder="Full Name"
                        name="name"
                        value={patient.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={patient.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Phone"
                        name="phone"
                        value={patient.phone}
                        onChange={handleChange}
                        required
                    />

                    <select
                        className="form-control mb-3"
                        name="gender"
                        value={patient.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>

                    <input
                        className="form-control mb-3"
                        type="date"
                        name="dateOfBirth"
                        value={patient.dateOfBirth}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Blood Group"
                        name="bloodGroup"
                        value={patient.bloodGroup}
                        onChange={handleChange}
                    />

                    <textarea
                        className="form-control mb-3"
                        placeholder="Address"
                        name="address"
                        value={patient.address}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="City"
                        name="city"
                        value={patient.city}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="State"
                        name="state"
                        value={patient.state}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Pincode"
                        name="pincode"
                        value={patient.pincode}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Emergency Contact"
                        name="emergencyContact"
                        value={patient.emergencyContact}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Aadhaar Number"
                        name="aadhaarNumber"
                        value={patient.aadhaarNumber}
                        onChange={handleChange}
                    />

                    <hr />

                    <input
                        className="form-control mb-3"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        required
                    />

                    <button
                        className="btn btn-success w-100"
                        type="submit"
                    >
                        Register
                    </button>

                </form>

                <p className="mt-3 text-center">

                    Already Registered?

                    <Link to="/login/patient">
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default PatientRegister;