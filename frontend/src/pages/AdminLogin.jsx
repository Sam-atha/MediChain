import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAdmin } from "../api/authService";

function AdminLogin() {

    const navigate = useNavigate();

    const [admin, setAdmin] = useState({

        adminId: "",

        user: {

            password: ""

        }

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "password") {

            setAdmin({

                ...admin,

                user: {

                    password: value

                }

            });

        }

        else {

            setAdmin({

                ...admin,

                [name]: value

            });

        }

    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await loginAdmin(admin);

            if (response.data === "Login Successful") {

                localStorage.setItem("adminId", admin.adminId);

                navigate("/admin/dashboard");

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
                    Admin Login
                </h2>

                <form onSubmit={handleLogin}>

                    <input
                        className="form-control mb-3"
                        placeholder="Admin ID"
                        name="adminId"
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

                    <button className="btn btn-dark w-100">

                        Login

                    </button>

                </form>

                <p className="mt-3 text-center">

                    New Admin?

                    <Link to="/register/admin">

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default AdminLogin;