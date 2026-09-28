import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginDoctor } from "../api/authService";

function DoctorLogin() {

    const navigate = useNavigate();

    const [doctor, setDoctor] = useState({

        doctorId: "",

        user: {

            password: ""

        }

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "password") {

            setDoctor({

                ...doctor,

                user: {

                    password: value

                }

            });

        }

        else {

            setDoctor({

                ...doctor,

                [name]: value

            });

        }

    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await loginDoctor(doctor);

            if (response.data === "Login Successful") {

                localStorage.setItem("doctorId", doctor.doctorId);

                navigate("/doctor/dashboard");

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

                    Doctor Login

                </h2>

                <form onSubmit={handleLogin}>

                    <input

                        className="form-control mb-3"

                        placeholder="Doctor ID"

                        name="doctorId"

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="password"

                        className="form-control mb-3"

                        placeholder="Password"

                        name="password"

                        onChange={handleChange}

                        required

                    />

                    <button className="btn btn-success w-100">

                        Login

                    </button>

                </form>

                <p className="mt-3 text-center">

                    New Doctor?

                    <Link to="/register/doctor">

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default DoctorLogin;