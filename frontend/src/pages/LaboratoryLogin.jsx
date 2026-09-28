import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginLab } from "../api/authService";

function LaboratoryLogin() {

    const navigate = useNavigate();

    const [lab, setLab] = useState({

        labId: "",

        user: {

            password: ""

        }

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "password") {

            setLab({

                ...lab,

                user: {

                    password: value

                }

            });

        }

        else {

            setLab({

                ...lab,

                [name]: value

            });

        }

    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await loginLab(lab);

            if (response.data === "Login Successful") {

                localStorage.setItem("labId", lab.labId);

                navigate("/laboratory/dashboard");

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
                    Laboratory Login
                </h2>

                <form onSubmit={handleLogin}>

                    <input
                        className="form-control mb-3"
                        placeholder="Laboratory ID"
                        name="labId"
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

                    <button className="btn btn-warning w-100">
                        Login
                    </button>

                </form>

                <p className="mt-3 text-center">

                    New Laboratory?

                    <Link to="/register/laboratory">

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default LaboratoryLogin;