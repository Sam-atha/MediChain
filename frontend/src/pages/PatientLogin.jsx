import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginPatient } from "../api/authService";
import "../styles/Login.css";

function PatientLogin() {

    const navigate = useNavigate();

    const [patient, setPatient] = useState({

        email: "",

        user: {

            password: ""

        }

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "password") {

            setPatient({

                ...patient,

                user: {

                    password: value

                }

            });

        }

        else {

            setPatient({

                ...patient,

                [name]: value

            });

        }

    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await loginPatient(patient);

            if (response.data === "Login Successful") {

                localStorage.setItem("patientEmail", patient.email);

                navigate("/patient/dashboard");

            }

            else {

                alert(response.data);

            }

        }

        catch (error) {

            alert("Login Failed");

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h2 className="text-center">

                    Patient Login

                </h2>

                <form onSubmit={handleLogin}>

                    <input

                        type="email"

                        name="email"

                        className="form-control mb-3"

                        placeholder="Email"

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="password"

                        name="password"

                        className="form-control mb-3"

                        placeholder="Password"

                        onChange={handleChange}

                        required

                    />

                    <button className="btn btn-primary w-100">

                        Login

                    </button>

                </form>

                <p className="mt-3 text-center">

                    New Patient?

                    <Link to="/register/patient">

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default PatientLogin;